const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('*Pong* This is fun!');
    }
    
    if (/don(\'t|t) do/g.test((message.content).toLowerCase())) {
        message.channel.send('You cant tell me what to do!');
    }
    
    if (/hello there/g.test((message.content).toLowerCase())) {
        message.channel.send('General Kenobi!');
    }
    if (/\(\╯\°\□\°\）\╯\︵ \┻\━\┻/g.test((message.content).toLowerCase())) {
        message.channel.send('\┬\─\┬\ノ\( \º \_ \º\ノ\) Let\'s keep it civil here');
    }
    if (/\(\☞ﾟ\ヮﾟ\)\☞/g.test(message.content)) {
        message.channel.send('\\\\\\\\\\\\\☜\(ﾟ\ヮﾟ\☜\)');
    }
});

client.login(process.env.BOT_TOKEN);
