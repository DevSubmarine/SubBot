const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "where",
    aliases: []
}

module.exports.run = async (client, message, args) => {
   if(!args[0]) message.reply('Please ask me a question.');

    else {
      let rand = [
      'Inside you.',
      'Paris.',
      'London.',
      'Germany',
      'In your cousin\'s uncle\'s neighbour\'s grandfather\'s cat\'s dollhouse',
      'Amsterdam',
      'Heaven',
      'In a Scandanavian torture chamber.',
      'In a plane.',
      'In his car.',
      'Reply hazy try again.',
      'Under the gutter.',
      'Under your chair.',
      'In the White House.',
      'On Gordon Ramsey\'s chopping board.',
      'In his basement.',
      'In his house.',
      'The beach.',
      'A farm',
      'Next door.',
      'In your foolish thoughts.',
      'On the couch.',
      'In your basement.',
      'Across the street.',
      'Inside your monitor screen',
      'In the attic.',
      'North Korea.',
      'Inside your liver',
      'In your mom\'s basement.',
      ];
      let index = (Math.floor(Math.random() * Math.floor(rand.length)));
      message.channel.send(rand[index]);
   }
}
