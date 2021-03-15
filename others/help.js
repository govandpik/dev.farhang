const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setDescription(`

 <a:emoji_19:818845027438166026>  DJ BOKANI @  <a:emoji_19:818845027438166026>

      <a:emoji_17:818843627621974056> COMAND MUSIC <a:emoji_17:818843627621974056> 
━━━━━━━━ <a:emoji_18:818844275750993940> ━━━━━━━━               
 __**<a:emoji_15:818839370730569760> @pause**__
 __**<a:emoji_15:818839370730569760> @play**__                   
 __**<a:emoji_15:818839370730569760> @queue**__                 
 __**<a:emoji_15:818839370730569760> @remove**__
 __**<a:emoji_15:818839370730569760> @resume**__             
 __**<a:emoji_15:818839370730569760> @search**__              
 __**<a:emoji_15:818839370730569760> @skip**__
 __**<a:emoji_15:818839370730569760> @skipto**__               
 __**<a:emoji_15:818839370730569760> @stop**__
 __**<a:emoji_15:818839370730569760> @volume**__
 ━━━━━━━━ <a:setting:813404135181385759> ━━━━━━━━ 
      <a:emoji_16:818842836890943488> FILTER COMMANDS <a:emoji_16:818842836890943488>
<a:lodaing:813403104384647238>  @fi 8D
 <a:lodaing:813403104384647238> @fi tremolo
 <a:lodaing:813403104384647238> @fi vibrato
 <a:lodaing:813403104384647238> @fi pulsator
 <a:lodaing:813403104384647238> @fi bassboost
 <a:lodaing:813403104384647238> @fi vaporwave
 ━━━━━━━━ <a:emoji_16:818842836890943488> ━━━━━━━━ 
      <a:discord:813406342173818910> OTHERS <a:discord:813406342173818910> 
<a:Erore:813505315534405632> @help              <a:remix:815540220031533087> @ping
<a:Erore:813505315534405632> @prefix            <a:remix:815540220031533087> @uptime
 ━━━━━━━━ <a:setting:813404135181385759> ━━━━━━━━ 
[SUPPORT](https://discord.gg/cbsHhSTK5v)    -    [INVITE](https://discord.com/oauth2/authorize?client_id=817582387734904842&permissions=70282305&scope=bot)

`)

  
   .setColor("RANDOM");
   helpEmbed.setTimestamp();
   message.react("<a:emoji_26:809385634149826611>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
