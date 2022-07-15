const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const morfin = new Discord.MessageEmbed()

    .setColor("RANDOM")

    .setDescription(`**Pingim : \`${client.ws.ping}\`**`)

  message.inlineReply(morfin);
};

module.exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: ["Gecikme"]
};

module.exports.help = {
  name: "ping",

  description: "",

  usage: "ping"
};
