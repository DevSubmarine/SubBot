const urban = require('urban')
const Discord = require('discord.js')

module.exports.config = { 
    name: "urban",
    aliases: ['urb', 'urbdict']
}

module.exports.run = async (client, message, args) => {
    if (args.length < 1) {
        return message.channel.send('Please enter a word');
    }
    let word = args.join(' ');
    console.log(word);
    
    urban(word).first(json => {
        if (!json) {
            return message.channel.send('No such word exist!');
        }
        const def = new Discord.MessageEmbed()
            .setTitle(json.word)
            .setDescription(json.definition)
            .addField('Upvotes', json.thumbs_up, true)
            .addField('Downvotes', json.thumb_down, true)
            .setTimestamp(new Date())
            .setFooter(`Written by ${json.author}`);
    
        message.channel.send(def);
    });
}