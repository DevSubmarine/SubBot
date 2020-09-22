const fetch = require('node-fetch')
const Discord = require('discord.js')

module.exports.config = { 
    name: "cat",
    aliases: ['kitty', 'kitten']
}

module.exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Generating...")

    fetch(`http://aws.random.cat/meow`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let cEmbed = new Discord.MessageEmbed()
        .setImage(body.file)
        .setTimestamp()

        message.channel.send(cEmbed)
        msg.delete()
    })
}