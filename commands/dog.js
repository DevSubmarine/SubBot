const fetch = require('node-fetch')
const request = require('superagent')
const Discord = require('discord.js')

module.exports.config = { 
    name: "dog",
    aliases: ['doggy', 'doggo']
}

module.exports.run = async (client, message, args) => {
    
    if (!args[0]) 
{
    let msg = await message.channel.send("Generating...")

    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let dEmbed = new Discord.MessageEmbed()
        .setImage(body.message)
        .setTimestamp()

            message.channel.send(dEmbed)
            msg.delete();
        })
} else if(args == "fact")
 {
    request.get('https://dog-api.kinduff.com/api/facts').end((err, res) => {
        if (!err && res.status === 200) {
            message.channel.send(res.body.facts[0])
        } else {
            console.log(`REST call failed: ${err}`)
        }
    });
 }
}