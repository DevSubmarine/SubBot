const cheerio = require('cheerio')
const request = require('request')

module.exports.config = { 
    name: "image",
    aliases: ['img', 'pic']
}

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send('Please tell me what you would like to see an image of!')
    else {
        let search = args.join(' ')
        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + search,
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        };
    
        request(options, function(error, response, responseBody) {
            if (error) {
                return;
            }
     
     
            $ = cheerio.load(responseBody);
     
     
            var links = $(".image a.link");
     
            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
     
            if (!urls.length) {
               
                return;
            }
     
            // Send result
            message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
        });
    }
}