const { Client, Collection, MessageEmbed} = require('discord.js')

module.exports.config = { 
    name: "lmgtfy",
    aliases: ['internet', 'lmgt']
}

module.exports.run = async (client, message, args) => {
   if(!args[0]) {
        message.react('👎')
        return message.channel.send('Please tell me what you would like to search.');
   }
   else {
       let search = args.join('+');

       message.channel.send(`Possibly find the answer to your question and learn what the internet is and how to use it at <https://lmgtfy.app/?q=${search}&iie=1>`)
   }
}