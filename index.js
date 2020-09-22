const {Client, Collection, MessageEmbed} = require('discord.js')

const client = new Client()

const prefix = '++'

const fs = require("fs");
client.commands = new Collection();
client.aliases = new Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
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
    console.log('Bot is on.');
})

client.on('message', async message => {
    if (!message.content.startsWith(prefix)) return
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args)
})

client.login('token');
