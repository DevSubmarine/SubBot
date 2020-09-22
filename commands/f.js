const Discord = require('discord.js')

module.exports.config = { 
    name: "f",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    message.channel.send('f');
}