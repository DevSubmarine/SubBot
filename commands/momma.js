const request = require('superagent')
const Discord = require('discord.js')

module.exports.config = { 
    name: "momma",
    aliases: ['momjoke', 'yomomma']
}

module.exports.run = async (client, message, args) => {
    request
    .get('http://api.yomomma.info/')
    .end((err, res) => {
      if (!err && res.status === 200) {
        try {
          JSON.parse(res.text);
        }
        catch (e) {
          return message.reply('the API is fucking breaking lmao someone help');
        }
        const joke = JSON.parse(res.text);
        message.channel.send(joke.joke);
      } else {
        console.error(`REST call failed: ${err}`);
      }
    })
}