const Discord = require('discord.js');
let harshReplies = ["Dude, you're english is so bad. Haha get it, I didnt use you're correctly. Actually you are probably too dumb to catch that!", "Oh arent you that guy that quit like 10 projects and started 50 more", "Dont you think your parents were a little Harsh when naming you?"];
let ibraReplies = ["Dude, you made a fucking toddler game with shapes and ported it to Steam.", "Your mouth is hidden in your profile picture because you dont have the guts to say shit", "Ibrahim more like SheVestHer haha amirite"];
let dutchReplies = ["Dude, you are making a ONE SHOT CLONE. You might wanna reconsider your life choices","Imagine being a math teacher and sucking at math", "The platform cycles in Now I see are slower than my dead grandma."];
let fmReplies = ["Anime profile pic opinions dont matter", "Imag"]
let tehReplies = ["Dickhead.", "Still a dickhead", "definitely still a dickhead"]

module.exports.config = { 
    name: "roast",
    aliases: ["rst"]
}

module.exports.run = async (client, message, args) => {
    let random = Math.floor(Math.random() * ibraReplies.length);
    if(!message.mentions.users.first())
    {
     message.channel.send("Dumbass maggot, at least specify the fucker you want me to roast. Like are you mentally sane?");

    } else {
       const user = message.mentions.users.first();
       console.log(user.id);
       if(user.id == 518432133111611397)
        {
       
         message.channel.send(harshReplies[random]);
     
        } else if(user.id == 135088614035030016)
        { 
       
        message.channel.send(dutchReplies[random]);
      
        } else if(user.id == 390618369545601028)
         {
             message.channel.send(fmReplies[random]);
         } else if(user.id == 247081094799687682)
         {
             message.channel.send(tehReplies[random]);
         }
   
   }
       
}