const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});


const prefix = '-'


 client.on("ready", () => {
  client.user.setActivity("dsc.gg/leafers", {type: "STREAMING", url: "https://twitch.tv/pardubaak"})
  console.log(`${client.user.username} Succesfully logged!`)
 });


 const Discord = require('discord.js');
  
  
 const fs = require('fs');
  
 client.commands = new Discord.Collection();
  
 const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
 for(const file of commandFiles){
     const command = require(`./commands/${file}`);
  
     client.commands.set(command.name, command);
 }


 client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
  } if(command ==='test'){
    client.commands.get('test').execute(message,args);
  }
});



client.login(" ");
