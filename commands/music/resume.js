const Discord = require('discord.js')
module.exports = {
  name: "resume",
  aliases: ["r"],
  usage: "resume",
  description: "resume the song!",
  run: async (client, message, args) => {

    if (message.content === '$resume') {
      message.react('▶');
    }
    
		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send(embed1);
		}
  }
}