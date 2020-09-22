const urban = require('urban')
const Discord = require('discord.js')

module.exports.config = { 
    name: "randurban",
    aliases: ['urbrand', 'randomurban']
}

module.exports.run = async (client, message, args) => {
    urban.random().first(json => {
        const def = new Discord.MessageEmbed()
            .setTitle(json.word)
            .setDescription(json.definition)
            .addField('Upvotes', json.thumbs_up, true)
            .addField('Downvotes', json.thumbs_down, true)
            .setTimestamp(new Date())
            .setFooter(`Written by ${json.author}`);

        message.channel.send(def);
    });
}