const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "when",
    aliases: []
}

module.exports.run = async (client, message, args) => {
   if(!args[0]) message.reply('Please ask me a question.');

    else {
      let rand = [
      'A few seconds ago.',
      'Before the start of time.',
      'In the upcoming second.',
      'Approximately 62,209 years from now.',
      'When the Earth burns down.',
      'When Kim-Jong was born.',
      'When Brackeys decided to quit >:(',
      'When Bill Gates founded Microbox.',
      'When Jesus was born.',
      '4,213 years ago.',
      '2 seconds ago.',
      'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.\'s birthday.',
      'When I got depression looking after you degenerates.',
      'Dutchy\'s birthdate.',
      'When Tuvalu got it\'s independence.',
      'Rhoshandiatellyneshiaunneveshenk Koyaanisquatsiuth Williams\'s niece\'s grandfather\'s father\'s daughter\'s half-birthday.',
      'When you took your most recent shit.',
      '4.6B years ago.',
      'When Buddha was born.',
      'Guray\'s birthday.',
      'When I was brought to life.',
      'When I decide to quite looking after you degenrates.',
      'In 5 minutes and 17 seconds.',
      '1 minute and 22 seconds ago.',
      'When the Earth began forming.',
      '2012.',
      'During Mesopotamia.',
      'When you were born.',
      'When Issac Newton invented the gravity.',
      ];
      let index = (Math.floor(Math.random() * Math.floor(rand.length)));
      message.channel.send(rand[index]);
   }
}