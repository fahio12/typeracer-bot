require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

startMessage = 'Game started. Press 👍 to play'

client.on('message', msg => {
  if (msg.content === '#play') {
    console.log(msg)
    start(msg)
  }
  if (msg.content === startMessage) {
    console.log(msg)
    start(msg)
  }
});

client.login(process.env.TOKEN);

function play(msg){
  msg.react('👍')
  msg.channel.send(startMessage)

}
function start(msg){
  msg.react('👍')
  
}
//get playerss
//prompt text
//players type
//auto delete text so players do not spam
//get accuracy time and words per minute.
// display score of all players
