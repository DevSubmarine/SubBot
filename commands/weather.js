const weather = require('weather-js');
const Discord = require('discord.js');
const { weatherDegreeType } = "C"
module.exports.config = { 
    name: "weather",
    aliases: ["wthr"]
}
module.exports.run = async (client, message, args) => {
    weather.find({search: args.join(" "), degreeType: weatherDegreeType}, function (error, result){
        
        if(error)
       { 
         message.channel.send("Please specify a location.");
         return message.react('👎')
       }
        if(!args[0])
        {
            message.channel.send('Please specify a location.')
            return message.react('👎')
        } 

        if(result === undefined || result.length === 0)
        {
            message.react('👎')
            const errorEmbed = new Discord.MessageEmbed()
            .setTitle('Couldnt find the location you provided!')
            .setDescription('Check your spelling in case of an error, or make sure you are providing the name of a valid location!')
            .setColor(15158332) 
            message.channel.send(errorEmbed)
            
        }

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(3066993)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Fahrenheit', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        .addField('Humidity', `${current.humidity}%`, true)


        message.channel.send(weatherinfo)
        })        
    }

       
