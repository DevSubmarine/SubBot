const Discord = require('discord.js');

module.exports.config = { 
    name: "avatar",
    aliases: ["av"]
}

module.exports.run = async (client, message, args) => {
    const avatarEmbed = new Discord.MessageEmbed()

    if(!message.mentions.users.first())
    {
    avatarEmbed.setTitle(message.author.username)
    avatarEmbed.setColor(3066993)   
    avatarEmbed.setAuthor("Your Avatar!")
    avatarEmbed.setImage(message.author.displayAvatarURL());
    } else {
       const user = message.mentions.users.first();
       avatarEmbed.setTitle(`${user.username}'s avatar!`)
       avatarEmbed.setColor(3066993)  
       avatarEmbed.setAuthor(user.username)
       avatarEmbed.setImage(user.displayAvatarURL());
   
   }
    message.channel.send(avatarEmbed);

       
}