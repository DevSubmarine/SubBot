const Discord = require('discord.js');

module.exports.config = { 
    name: "ping",
    aliases: ["png"]
}

module.exports.run = async (client, message, args) => {
    const ping = new Discord.MessageEmbed()
    .setAuthor(`Pong! Latency is about \`${client.ws.ping}\` ms`)
    .setTimestamp(Date.now())
    .setColor(3066993);
    message.channel.send(ping);

       
}