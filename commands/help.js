const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "help",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    message.channel.send('Stop begging me for help you dipshit.');
}