const Discord = require('discord.js');

module.exports.config = { 
    name: "about",
    aliases: ["info", "abt"]
}

module.exports.run = async (client, message, args) => {
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ff9841')
        .setTitle('What is SubBot?')
        .setDescription('SubBot is the official DevSubmarine Discord Bot! It features lots of funny and silly commands for the Dev Submarine server! If you would like to contribute or check out the repo for this bot, click [here](https://github.com/DevSubmarine/SubBot)!')
        .setThumbnail("https://cdn.discordapp.com/avatars/757989961512386731/2fd8d7f3248e48d63ded67c9536556bf.webp")
        .setFooter("Credits: Guray, TehGM, harsh-dev and IbrahimDev.");
    
    message.channel.send(exampleEmbed);
}