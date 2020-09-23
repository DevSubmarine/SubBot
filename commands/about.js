const Discord = require('discord.js');

module.exports.config = { 
    name: "about",
    aliases: ["info"]
}

module.exports.run = async (client, message, args) => {
    const aboutEmbed = new Discord.MessageEmbed()
    aboutEmbed.setTitle(message.author.username)
    aboutEmbed.setColor(3066993)   
    aboutEmbed.setAuthor("Your Avatar!")
    aboutEmbed.setImage(message.author.displayAvatarURL());
    message.channel.send(avatarEmbed);

       
}