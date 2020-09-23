var config = require('./settings.json');
var log = require('./logging.js').configureLogging(config.Logging);

process.on('uncaughtException', function (error) {
    try {
        log.error(error);
    }
    catch (error) {
        console.error(error);
    }
});
log.verbose('Bot initializing');

const { Client, Collection, MessageEmbed } = require('discord.js')

const client = new Client()

const prefix = '++'

const fs = require("fs");
client.commands = new Collection();
client.aliases = new Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) log.error(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return log.warn("Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        });
    });
});

client.on('ready', () => {
    client.user.setActivity(`Looking after ${client.users.cache.size} submariners!`);
    log.info('Bot is on.');
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!oldMessage.guild) return;

    const oldMessageMention = oldMessage.mentions.members.first()
    const newMessageMention = newMessage.mentions.members.first()

    if (oldMessageMention && !newMessageMention && oldMessage.author.id !== oldMessageMention.id) {
        let embed = new MessageEmbed()
            .setColor('#ff6a6a')
            .setTitle("Ghost ping detected!")
            .addField('**Author**', oldMessage.author)
            .addField("**Origional Message**", oldMessage, true)
            .addField("**New Message**", newMessage, true)
            .addField('**Type**', 'Sender sent a message. Then proceeded to edit the ping out of the message.')
            .setTimestamp();
        oldMessage.channel.send(embed)
    }
})

client.on('messageDelete', message => {
    if (!message.guild) return;

    if (message.mentions.members.first() && message.mentions.members.first().id != message.author.id) {
        let embed = new MessageEmbed()
            .setColor('#ff6a6a')
            .setTitle("Ghost ping detected!")
            .addField('**Sender**', message.author)
            .addField("**Message**", message.content)
            .addField('**Type**', 'Sender sent a message, and then proceeded to delete it thereafter.')
            .setTimestamp();
        message.channel.send(embed)
    }
})

client.login('token');