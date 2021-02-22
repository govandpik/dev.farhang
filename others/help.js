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

 ≪  Prefix Bot m!  ≫

      <a:emoji_1:797796538939867137> command music <a:emoji_1:797796538939867137> 

 <a:emoji_30:812376416409747578> m!loop 
 <a:emoji_30:812376416409747578> m!lyrics              
 <a:emoji_30:812376416409747578> m!pause
 <a:emoji_30:812376416409747578> m!play                   
 <a:emoji_30:812376416409747578> m!queue
 <a:emoji_30:812376416409747578> m!radio                 
 <a:emoji_30:812376416409747578> m!remove
 <a:emoji_30:812376416409747578> m!resume             
 <a:emoji_30:812376416409747578> m!search
 <a:emoji_30:812376416409747578> m!shuffle              
 <a:emoji_30:812376416409747578> m!skip
 <a:emoji_30:812376416409747578> m!skipto               
<a:emoji_30:812376416409747578>  m!stop
 <a:emoji_30:812376416409747578> m!volume

      <a:emoji_5:797912346759659591> Filter Commands <a:emoji_5:797912346759659591>
<a:emoji_9:797912443628027955>  m!fi 8D
 <a:emoji_9:797912443628027955> m!fi tremolo
 <a:emoji_9:797912443628027955> m!fi vibrato
 <a:emoji_9:797912443628027955> m!fi pulsator
 <a:emoji_9:797912443628027955> m!fi clear
 <a:emoji_9:797912443628027955> m!fi bassboost
 <a:emoji_9:797912443628027955> m!fi vaporwave

      <a:emoji_7:797912407309287434> Others <a:emoji_7:797912407309287434> 
 <a:emoji_29:812376279814635591> m!help              <a:emoji_29:812376279814635591> m!ping
<a:emoji_29:812376279814635591> m!prefix            <a:emoji_29:812376279814635591> m!uptime

[SUPPORT](https://discord.gg/rWQh4SYQsR)    -    [INVITE](https://discord.com/api/oauth2/authorize?client_id=793214259932561419&permissions=8&scope=bot)

`)

  
   .setColor("BLUE");
   helpEmbed.setTimestamp();
   message.react("<a:emoji_26:809385634149826611>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
