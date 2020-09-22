const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "who",
    aliases: []
}

module.exports.run = async (client, message, args) => {
   if(!args[0]) message.reply('Please ask me a question.');

    else {
      let rand = [
      'Guray.',
      'Aqua',
      'CodeMyst',
      'Your cousin.',
      'Your cousin\'s uncle\'s neighbour\'s grandfather\'s cat\'s doll',
      'Kim.',
      'Brackeys.',
      'Bill Gates.',
      'Your mom.',
      'Your dad.',
      'You.',
      'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.',
      'Daddy.',
      'Dutchy',
      'The senate members of Tuvalu.',
      'Rhoshandiatellyneshiaunneveshenk Koyaanisquatsiuth Williams',
      'Harsh.',
      'Not you.',
      'Juan Joya Borja',
      'Snowy',
      'Me.',
      'Steven Jobbers.',
      'My imaginary friend',
      'Your imaginary friend.',
      'Your best friend',
      'The people who can spell pneumonoultramicroscopicsilicovolcanoconiosis correctly.',
      'Bustin Jieber.',
      'A game developer.',
      'Issac Newton',
      ];
      let index = (Math.floor(Math.random() * Math.floor(rand.length)));
      message.channel.send(rand[index]);
   }
}