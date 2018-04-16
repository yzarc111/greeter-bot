const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('*Pong* This is fun!');
    }
    
    //if (/don(\'t|t) do/g(message.content.toLowerCase())) {
    //    message.reply('You cant tell me what to do!');
    //}
});

client.login(process.env.BOT_TOKEN);
