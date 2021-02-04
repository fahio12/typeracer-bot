require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

startMessage = 'Game starting. Press 👍 to play. Press ✅ to start'
players = []

client.on('message', msg => {
  //starts game
  if (msg.content === '#play') {
    msg.channel.send(startMessage)
  }
  //gets players
  if (msg.content === startMessage) {
    msg.react('👍')
    msg.react('✅')
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  // Get Players and adds them to players[] list
    if(reaction.emoji.name === "👍") {
      if(!user.bot && !players.includes(user.username)){
        players.push(user.username)
      }
  // Starts game
    }else if(reaction.emoji.name === "✅"){
      if(!user.bot){
        // add start function later
        start(reaction)
        reaction.message.delete()
      }
    }
});
async function start(reaction){
  channel = reaction.message.channel
  channel.send("✅ Game started ✅\nPlayers are:")
  players.forEach(player => channel.send(player))
  channel.send("Try typing the following text as fast as you can.")
  // Change later so its dinamic
  promptedText = await channel.send("`The pleasure of rooting for Goliath is that you can expect to win. The pleasure of rooting for David is that, while you don't know what to expect, you stand at least a chance of being inspired.`")
  startTime = promptedText.createdTimestamp
}

client.login(process.env.TOKEN);

//get playerss
//prompt text
//players type
//auto delete text so players do not spam
//get accuracy time and words per minute.
// display score of all players
