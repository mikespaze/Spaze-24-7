const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('The bot is online!')
});


client.on('message', message => {

});

// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
