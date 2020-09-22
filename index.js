const {Client, Collection, MessageEmbed} = require('discord.js')

const client = new Client()

const prefix = '++'

const fs = require('fs')
client.commands = new Collection()
client.aliases = new Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === 'js');

    if (jsfile.length <= 0) return console.log("No commands found");

    jsfile.forEach((file, i) => { 
        let pullcmd = require(`./commands/${file}`);
        client.commands.set(pullcmd.config.name, pullcmd);
        pullcmd.config.aliases.forEach(alias => {
            client.aliases.set(alias, pullcmd.config.aliases);
        })
    })
})

client.on('ready', () => {
    client.user.setActivity(`Looking after ${client.users.cache.size} submariners!`);
    console.log('Bot is on.');
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(cmd.slice(prefix.length));
    if (commandFile) commandFile.run(client, message, args);
})

client.login('token');
