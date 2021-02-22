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
    .setTitle(`<a:emoji_15:798111117053526017> **Prefix Bot m!** <a:emoji_16:798111136145997824>`)
    .setThumbnail(message.author.avatarURL())
    .setDescription(`



<a:emoji_5:797912346759659591> **Command Music** <a:emoji_5:797912346759659591> 

<a:emoji_29:813102989723172906> \`m!filter\`          <a:emoji_29:813102989723172906> \`m!loop\`

<a:emoji_29:813102989723172906> \`m!lyrics\`         <a:emoji_29:813102989723172906> \`m!nowplaing\`

<a:emoji_29:813102989723172906> \`m!pause\`         <a:emoji_29:813102989723172906> \`m!play\`

<a:emoji_29:813102989723172906> \`m!queue\`         <a:emoji_29:813102989723172906> \`m!radio\`

<a:emoji_29:813102989723172906> \`m!remove\`      <a:emoji_29:813102989723172906> \`m!resume\`

<a:emoji_29:813102989723172906> \`m!search\`       <a:emoji_29:813102989723172906> \`m!shuffle\`

<a:emoji_29:813102989723172906> \`m!skip\`            <a:emoji_29:813102989723172906> \`m!skipto\`

<a:emoji_29:813102989723172906> \`m!stop\`            <a:emoji_29:813102989723172906> \`m!volume\`

<a:emoji_5:797912346759659591> **Others** <a:emoji_5:797912346759659591>

<a:emoji_29:813102989723172906> \`m!help\`        <a:emoji_29:813102989723172906> \`m!ping\`

<a:emoji_29:813102989723172906> \`m!prefix\`       <a:emoji_29:813102989723172906> \`m!uptime\`

[July Support Server](https://discord.gg/rWQh4SYQsR) - [July Invited](https://discord.com/api/oauth2/authorize?client_id=793214259932561419&permissions=8&scope=bot)

`)

  
   .setColor("BLUE");
   helpEmbed.setTimestamp();
   message.react("<a:emoji_29:813102989723172906>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
