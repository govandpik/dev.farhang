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

 ≪  Prefix Bot @  ≫

      <a:emoji_17:818843627621974056> command music <a:emoji_17:818843627621974056> 

 <a:emoji_15:818839370730569760> @loop 
 <a:emoji_15:818839370730569760> @lyrics              
 <a:emoji_15:818839370730569760> @pause
 <a:emoji_15:818839370730569760> @play                   
 <a:emoji_15:818839370730569760> @queue
 <a:emoji_15:818839370730569760> @radio                 
 <a:emoji_15:818839370730569760> @remove
 <a:emoji_15:818839370730569760> @resume             
 <a:emoji_15:818839370730569760> @search
 <a:emoji_15:818839370730569760> @shuffle              
 <a:emoji_15:818839370730569760> @skip
 <a:emoji_15:818839370730569760> @skipto               
 <a:emoji_15:818839370730569760> @stop
 <a:emoji_15:818839370730569760> @volume
◈ ━━━━━━━━ <a:setting:813404135181385759> ━━━━━━━━ ◈
      <a:emoji_16:818842836890943488> Filter Commands <a:emoji_16:818842836890943488>
<a:emoji_9:797912443628027955>  @fi 8D
 <a:emoji_9:797912443628027955> @fi tremolo
 <a:emoji_9:797912443628027955> @fi vibrato
 <a:emoji_9:797912443628027955> @fi pulsator
 <a:emoji_9:797912443628027955> @fi clear
 <a:emoji_9:797912443628027955> @fi bassboost
 <a:emoji_9:797912443628027955> @fi vaporwave
 ━━━━━━━━ <a:emoji_16:818842836890943488> ━━━━━━━━ 
      <a:discord:813406342173818910> Others <a:discord:813406342173818910> 
<a:Erore:813505315534405632> @help              <a:remix:815540220031533087> @ping
<a:Erore:813505315534405632> @prefix            <a:remix:815540220031533087> @uptime
 ━━━━━━━━ <a:setting:813404135181385759> ━━━━━━━━ 
[SUPPORT](https://discord.gg/PwZrRhmc3n)    -    [INVITE](https://discord.com/oauth2/authorize?client_id=817582387734904842&permissions=70282305&scope=bot)

`)

  
   .setColor("RANDOM");
   helpEmbed.setTimestamp();
   message.react("<a:emoji_26:809385634149826611>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
