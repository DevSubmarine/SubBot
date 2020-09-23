const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "lmgtfy",
    aliases: []
}

module.exports.run = async (client, message, args) => {
   if(!args[0]) message.reply('Please tell me what you would like to search.');
   else {
       let search = args.join('+');

       message.channel.send(`Possibly find the answer to your question at <https://lmgtfy.app/?q=${search}>`)
   }
}