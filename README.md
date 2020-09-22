# SubBot
Bot for the Dev Submarine discord server

### Logging

#### Configuring

The bot is set up to use [Winston](https://github.com/winstonjs/winston) for logs, but has customized configuration loading, allowing changing logging behaviour inside of settings.json file.

The logging is set up inside of `Logging` object property of settings file. If the property is missing, bot will set up simple logging to Console with 'verbose' `level` by default.

The `Logging` object can have few properties, which will be used when configuring Winston.
- `level` - specifies the default [logging level](https://github.com/winstonjs/winston#logging) for all transports;
- `exitOnError` - whether unhandled exceptions should cause bot to exit
- `silent` - will surpress all logs

Additionally, at least one transport needs to be configured for logging to work. Transports can be configured with `transports` array inside of `Logging` object. Each element of the array should be an object - each object represents one transport.
One property is required in each transport: `TransportType`. This property is used to tell configuration loader which Winston transport to pick. Currently, the bot supports 3 transport types:
- [Console](https://github.com/winstonjs/winston/blob/master/docs/transports.md#console-transport)
- [File](https://github.com/winstonjs/winston/blob/master/docs/transports.md#file-transport)
- [Http](https://github.com/winstonjs/winston/blob/master/docs/transports.md#http-transport)
- [DataDog](https://github.com/winstonjs/winston/blob/master/docs/transports.md#datadog-transport)

Besides `TransportType`, some transport may require additional properties. All properties besides `TransportType` will be passed as-is to Winston transport object.
Please refer to [Winston Transports docs](https://github.com/winstonjs/winston/blob/master/docs/transports.md) for configuration details for each transport type.

Logging configuration example can be found in [settings.example.json](/settings.example.json) file.

#### Logging in formatters and filters

To log from separate file, simply require the logging.js (might require `..` etc if the file is in a folder).

```js
var Log = require('./logging.js')

Log.info('My special log message');
```

For more information, refer to [Winston Logging docs](https://github.com/winstonjs/winston#logging).