const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود



const prefix = "$"
const developers = "706161534233083964"

////////


client.on('message', async msg => {
var prefix = "$";
var user = msg.author;
var a = msg.guild.roles.find("name", 'Male');
if(!a){
a = await msg.guild.createRole({
name: "Male",
color: "#ffffff",
permissions:[]
})
 
}
var m = msg.guild.roles.find("name", 'Female');
if(!m){
m = await msg.guild.createRole({
name: "Female",
color: "#ffffff",
permissions:[]
})
} 
if (msg.content.startsWith(prefix +'addmerole')) {
 
if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
msg.channel.send(`يرحي اختيار رتبة اللعبة الذي تريدها \n1- لعبة اقاريو ⚽ \n2- لعبة ماين كرافت 👶 \n3- لعبة فورت نايت 👊 \n4- لعبة براوهلا 👌 \n5- لعبة بلاك سكواد 🍸\n6- الغاء ❌ \n7- **لديك60 ثانية للاختيار **\n<@${msg.author.id}>`).then(res => {
res.react('⚽').then(r=>{
res.react('👶').then(r=>{
res.react('👊').then(r=>{
res.react('👌').then(r=>{
res.react('🍸').then(r=>{
res.react('❌').then(r=>{
 
let aaa = (reaction, user) => reaction.emoji.name === '⚽' && user.id === msg.author.id;
let mmm = (reaction, user) => reaction.emoji.name === '👶' && user.id === msg.author.id;
let fff = (reaction, user) => reaction.emoji.name === '👊' && user.id === msg.author.id;
let bbb = (reaction, user) => reaction.emoji.name === '👌' && user.id === msg.author.id;
let bbbb = (reaction, user) => reaction.emoji.name === '🍸' && user.id === msg.author.id;
let ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 
let aa = res.createReactionCollector(aaa, { maxMatches:1 , time: 20000 , });
let mm = res.createReactionCollector(mmm, { maxMatches:1 , time: 20000 , });
let cc = res.createReactionCollector(ccc, { maxMatches:1 , time: 20000 , });
 
aa.on("collect", r => {
msg.guild.member(user.id).addRole(a);
msg.channel.send('`تم اعطائك رتبة للعبة Agar`');
msg.delete();
})
mm.on("collect", r => {
msg.guild.member(user.id).addRole(m);
msg.channel.send('`تم اعطائك رتبة للعبة Mincraft `');
msg.delete();
})

cc.on("collect", r => {
msg.delete();
})
})
})
})
})
})
})
})
}
});




client.login(process.env.TOKEN);
