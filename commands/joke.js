const Discord = require('discord.js')
const jokes = require('discord-jokes')

module.exports.config = { 
    name: "joke",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    jokes.getRandomDadJoke(function (joke) {
        message.channel.send(joke);
    })
}