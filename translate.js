const Discord = require('discord.js')
const translate = require('@vitalets/google-translate-api')

module.exports.config = { 
    name: "translate",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send('Please tell me what you would like to translate, and to which language! Ex. !translate What would you like to translate? nameOfLanguage')
    else {
        let languageToTranslate = args.pop();
        let textToTranslate = args.join(' ')
        
        if (!textToTranslate) return message.channel.send('Please tell me which text you would like to translate.')
        else if (!languageToTranslate) return message.channel.send('Please specify a language!')
        else {
            translate(textToTranslate, {to: languageToTranslate}).then(res => {message.channel.send(`To say "${textToTranslate}" in ${languageToTranslate}, we say "${res.text}"`)})
        }
    }
}