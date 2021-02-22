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
    .setTitle(`<a:22CE943240F04B89B202818358B89BD7:800236414171611173>  __**Prefix Bot +**__ <a:emoji_16:798111136145997824> `)
    .setThumbnail(message.author.avatarURL())
    .setDescription(`

<a:emoji_7:798080205138821170>  __**Music Commands**__ <a:emoji_7:798080205138821170>

<a:emoji_29:813102989723172906> \`play\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`clip\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`clips\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906>  \`loop\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`lyrics\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`pause\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`playlist\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`pruning\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`queue\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`remove\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`resume\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906>  \`search\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906>  \`shuffle\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906>  \`skip\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`skipto\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`stop\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`uptime\`
<a:emoji_45:801530072560828417> 
<a:emoji_29:813102989723172906> \`volume\`

[July Support Server](https://discord.gg/rWQh4SYQsR) - [July Invited](https://discord.com/api/oauth2/authorize?client_id=793214259932561419&permissions=8&scope=bot)


`)

  
   .setColor("BLUE");
   helpEmbed.setTimestamp();
   message.react("<a:emoji_29:813102989723172906>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
