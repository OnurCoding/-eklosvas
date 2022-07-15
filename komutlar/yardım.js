const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  const morfin = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(" FreeCity Çekiliş 🎉")
    .setDescription(
      `**Selam ${message.author.username} Yardım Listeme Hoşgeldin.**
      
  **Çekiliş Başlatma Komutu = \`\.çekiliş-yap [#Çekiliş_Kanalı] [Zaman] [Kazanacak_Sayı] [Ödül]\`**

  **Çekiliş Yenileme Komutu = \`\.çekiliş-yeniden [Mesaj_ID]\`**

  **Çekiliş Bitirme Komutu = \`\.çekiliş-bitir[Mesaj_ID]\`**

 **Ping/Gecikme Komutu = \`\.ping\`**`
    )
    .setFooter(
      `FreeCity Çekiliş | ${message.author.username} Tarafından İstendi.`
    );
  message.channel.send(morfin);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"]
};

module.exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};
