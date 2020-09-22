const Discord = require('discord.js')
const moment = require('moment')

module.exports.config = { 
    name: "userinfo",
    aliases: ['user-info', 'useri']
}

module.exports.run = async (client, message, args) => {
    
    if (!args[0]) message.channel.send('Please specify a user!')
    else {
        const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;

        const userInfoEmbed = new Discord.MessageEmbed()
        .setColor('#00B6FF')
        .setThumbnail(`${member.user.displayAvatarURL({dynamic: true, size: 512})}`)
        .setTitle(`Info for "${member.user.username}"`)
        .addField('Discord ID', `${member.id}`)
        .addField('Date created', `${moment(member.user.createdTimestamp)}`)
        .addField('Status', `${member.user.presence.status}`)
        .addField('Game', `${member.user.presence.activities || 'None'}`)
        .addField('Server Join Date', `${moment(member.joinedAt)}`)
     
        message.channel.send(userInfoEmbed);
    }
}