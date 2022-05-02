const  { Client, Intents } = require('discord.js')
const { Token } = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]} );

client.once('ready', () =>{
    console.log('Ready!')
})


client.on('message', (message) =>{
    if (message.author.id === client.user.id) return;

    if (message.content === "ping"){
        message.reply("pong!");
    }
})


client.login(Token);