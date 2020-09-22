var winston = require('winston');

var stringLogFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.timestamp(),
    winston.format.printf(info => {
        var formattedTimestamp = info.timestamp.replace(/T/, ' ').replace(/\..+/, '');
        var msg = info.message;
        if (info.label)
            msg = '[' + info.label + '] ' + msg;
        return `${formattedTimestamp} ${info.level}: ${msg}`
    })
);

var jsonLogFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
);

function configureLogging(loggingConfiguration = undefined) {
    winston.clear();

    if (loggingConfiguration === undefined) {
        winston.configure({
            level: 'verbose',
            transports: [
                new winston.transports.Console({
                    stderrLevels: ['error'],
                    consoleWarnLevels: ['warn'],
                    format: stringLogFormat,
                    handleExceptions: true
                })
            ]
        });
    }
    else if (loggingConfiguration) {
        winston.configure({
            level: loggingConfiguration.level,
            silent: loggingConfiguration.silent,
            exitOnError: loggingConfiguration.exitOnError,
            format: jsonLogFormat
        });

        // add each supported transport
        if (Array.isArray(loggingConfiguration.transports)) {
            for (i = 0; i < loggingConfiguration.transports.length; i++) {
                var transportConfig = loggingConfiguration.transports[i];

                switch (transportConfig.TransportType.toUpperCase()) {
                    case "CONSOLE":
                        winston.add(new winston.transports.Console(
                            Object.assign({}, transportConfig, { format: stringLogFormat }))
                        );
                        break;
                    case "FILE":
                        winston.add(new winston.transports.File(
                            Object.assign({}, transportConfig, { format: winston.format.combine(stringLogFormat, winston.format.uncolorize()) }))
                        );
                        break;
                    case "HTTP":
                        winston.add(new winston.transports.Http(
                            Object.assign({}, transportConfig, { format: jsonLogFormat }))
                        );
                        break;
                    case "DATADOG":
                        var DatadogTransport = require('datadog-winston');
                        winston.add(new DatadogTransport(
                            Object.assign({}, transportConfig, { format: jsonLogFormat, ddsource: transportConfig.ddsource || 'node.js' }))
                        );
                        break;
                }
            }
        }
    }

    return winston;
}

module.exports = winston;
module.exports.configureLogging = configureLogging;