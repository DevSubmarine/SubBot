const Discord = require('discord.js')

module.exports.config = { 
    name: "poll",
    aliases: ['vote', 'pl']
}

module.exports.run = async (client, message, args) => {
    let msgArgs = args.join(' ')

    if (!args[0]) return message.channel.send('Please tell me what you would like the poll to ask!')
    else {
        message.channel.send(`**${msgArgs}**`).then(messageReaction => {messageReaction.react('👍'), messageReaction.react('👎')})
        message.delete();
    }
}