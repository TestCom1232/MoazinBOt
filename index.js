const { Client, Collection } = require("discord.js");
const ytdl = require('ytdl-core');
const {joinVoiceChannel } = require('@discordjs/voice');
const { createAudioResource, StreamType , createAudioPlayer } = require('@discordjs/voice');
const { MessageEmbed,Discord,MessageSelectMenu,MessageActionRow,MessageButton , ActionRowBuilder}= require("discord.js")
const client = new Client({
    intents: 32767,
});
///////////////////////////////////////////////////////////////////////////////
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.login(process.env.token)
client.config = require("./config.json");
const  ms  = require("ms")
const request = require('request');
const cheerio = require("cheerio"); 
const rp = require("request-promise");
const mongoose = require('mongoose') /// هذا موقعي (Mohsenxx)
const azkarr = require('./models/azkar.js') ///(اعدادات روم اذكار)
let embedd = require('./models/embed.js') ///(اعدادات امبيد)
let azan = require('./models/azan.js') ///(اعدادات اذان )
let Mazan = require('./models/Mazan.js') ///(اعدادات اذان )
const togglee = require('./models/toggle.js') ///(اعدادات روم اذكار)
const togglee_azan = require('./models/toggle_azan.js') ///(اعدادات روم اذكار)
require("./handler")(client);
const { EColor ,emojiH , ErrorID,  urlE, ErorE, correctEmoji,  iconEx,XEmoji } = require('./settings/config');

const azkar = require("./lib/azkar.js")
/*

client.on("ready",async function(){
     setInterval(()=> {          ///أيدي الروم                              .. id رسالة خاصة بالبوت داخل الروم
       let Zkar = [
" 2021 فكرة ( مصعب - مازن) :",
"💛اللهم صَلِّ على نبينا محمد : ",
"ᵔ Ⲙ is typing...",
           "/صلاة :",
       ]
       let EmbedSender = Zkar[Math.floor(Math.random() * Zkar.length)];
  client.channels.cache.get('1052607679903838229').messages.fetch('1053362153056378980').then(msg=>{ 
    const guild = client.guilds.cache.get("862339776619610143"); //ايدي سيرفر شسممهه حقك
        let GetRoles = guild.roles.cache.get('1050122517718773881'); /// ايدي رول 
      let MohsenAvatar = guild.members.cache.get('671557148773187605');
    let members = GetRoles.members.map(m=>m.user.username).join('\n<:__:1049887767410257930> •'); // ايموجي
          let Embed2 = new MessageEmbed()
              .setAuthor({name:`${EmbedSender}`,iconURL:`${MohsenAvatar.user.avatarURL()}`})
.setDescription(`**> مرحباََ بك ،،،، من هنا يمكنك الحصول على رتبة
> نسعى في ملتقى الاحبة الى عدم ازعاج الأعضاء لذالك 
> تم انشاء رتبة مسلم لـ تذكير بصلاة 
> يمكنك أخذ الرول بضغط على الزر <:__:1049887767410257930> ​ أدناة
> في حال رغبت بإزلتة قم بضغط على الزر مره أخرى .. ء**`)
      .setThumbnail(client.user.avatarURL({format : 'png', size : 1024, dynamic : true}))    
            .setImage("https://media.discordapp.net/attachments/823061823862341663/1054436298800246836/Untitled_3.png")
 .setColor("#4CBB17")
                   .setFooter({text:`عندك أقتراح ؟ تواصل معي  Ⲙ#5321`})
  .setThumbnail(client.user.avatarURL({format:'png',size:1024,dynamic:true}))
           let Colors = [
"PRIMARY",
             "SECONDARY",
             "SUCCESS",
       ]
       let ButtonColorMix = Colors[Math.floor(Math.random() * Colors.length)];
 const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('GETREMOVE')                  
        .setLabel('')  
      .setEmoji("<:__:1049887767410257930>")
        .setStyle(ButtonColorMix),                     
      )
                

       msg.edit({ content:`**_ _**`,embeds:[Embed2], components: [row] }).catch(err => console.log(err))
 
})
       
    
          },9000)///60000



client.on('interactionCreate', async interaction => {
  const member = interaction.member;
   console.log(member.roles.cache);
    if (interaction.customId  == 'GETREMOVE') {
        let role = interaction.guild.roles.cache.find(r => r.id === '1050122517718773881')// ايدي الرتبة الخاصة بإشعارات 
              if (member.roles.cache.has('1050122517718773881')) {// ايدي الرتبة الخاصة بإشعارات 
               await member.roles.remove('1050122517718773881').catch(err => console.log(err))
                return  interaction.reply({content:`<@!${member.id}> : 🔴`,ephemeral:true })
            } else { 
                await member.roles.add('1050122517718773881').catch(err => console.log(err))
        return interaction.reply({content:`<@!${member.id}> : 🟢`,ephemeral:true })

            }            
      }
    
})


})



*/

client.on('ready', async () => {
await mongoose.connect(`mongodb+srv://${process.env.username}:Aa112233@cluster0.iufkwz0.mongodb.net/all-data?retryWrites=true&w=majority`).then(() => {
  console.log('🟢: تم الربط بالموقع')
}).catch(err => {
  console.log('🔴' + err)
})
   console.log(`
╭━━─━━─━━─━━─━━─━─━─━─≪✠≫─━━─━━─━━─━━─━━─━━─━─━─━╮
              ${process.version} : إصدار البوت *
           ${client.user.username} : اسم البوت *     
           Mohsen Al-Salmani : مبرمج البوت * 
╰━─━─━━─━━─━━─━━─━━─━─≪✠≫─━─━─━━─━━─━━─━━─━━─━━─━╯
   `)
      let Activitys = ["أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ"];
  setInterval(()=>{
      let Statuss = Activitys[Math.floor(Math.random() *  Activitys.length)];
  client.user.setStatus("dnd")
 client.user.setActivity(`/help | ${Statuss}`, {
    type: 'STREAMING',
    url:"https://www.twitch.tv/directory",

  })
    },60000);
console.log(`${process.platform}`)
  
  
  
})




///////////////////////////////////////////////////////////////////////////////////////////

  
  
  
client.on("messageCreate", function(message) {
if(message.content=="خط"){
    const member = message.author;
    let banner = ["./assets/banner.png"]
   if(message.author.bot) return false ;
  if(message.author.id=="724438543258353715"){
  message.delete({timeout:5000})
           let banner = ["./assets/banner.png"]
return message.channel.send({content:`https://cdn.glitch.global/b9f9f56b-9319-4396-ad08-94de779e591a/banner.png?v=1674157628588`})
   }
    if(message.author.id=="671557148773187605"){
  message.delete({timeout:5000})
           let banner = ["./assets/banner.png"]
return message.channel.send({content:`https://cdn.glitch.global/b9f9f56b-9319-4396-ad08-94de779e591a/banner.png?v=1674157628588`})
   }
    if(message.author.id=="708296632990564392"){
  message.delete({timeout:5000})
           let banner = ["./assets/banner.png"]
return message.channel.send({content:`https://cdn.glitch.global/b9f9f56b-9319-4396-ad08-94de779e591a/banner.png?v=1674157628588`})
   }
}
})

///////////////////////////////////////////////////////////////////////////////////////////
















client.on("messageCreate",message =>{
  if(message.content == "test"){
  let embed = new MessageEmbed()
.setAuthor({name:`${client.user.username} | سورة الأحزاب`,iconURL:client.user.avatarURL()})
  .setTitle("**﴿ __وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ وَلَا يَزِيدُ الظَّالِمِينَ إِلَّا خَسَارًا__ ﴾**")
.setImage("https://media.discordapp.net/attachments/871664982981484564/1066881626518335568/EtVi3h5WQAYK1ii.png?width=558&height=558")
  .setColor(EColor)
  .setFooter({text:message.guild.name,iconURL:message.guild.iconURL({dynamic:true})})
  return message.reply({embeds:[embed]})
  }
})






















client.on("ready",async()=>{
  let guildData = await azkarr.find({})
if(guildData.length > 0) {
guildData.forEach( async data => {
let guild = client.guilds.cache.get(data.guild)
let channel = guild.channels.cache.get(data.channel)
let Time = data.time;
  setInterval( async () => { 
if(channel){
  let toggle = await togglee.findOne({ guild: guild.id })
    if(toggle && toggle.toggle == "on"){  
      var data = azkar[Math.floor(Math.random() * azkar.length)];
  let AzkarEmbed = new MessageEmbed()
  .setAuthor({name:`مُؤذن | مواعظ وأذكار`,iconURL:client.user.avatarURL({dynamic: true})})
  .setTitle(`${data.category}`)
  .setColor(EColor)
.setDescription(`>>> ${data.content}`)
.setTimestamp()
if (data.reference != "" && data.count != "")
  AzkarEmbed.addFields(
                    {
                 name: `معلومات الذكر`,
                 value: `${data.reference != "" ? `**المرجع:** ${data.reference}` : ""} - ${data.count != "" ? `**تكرار الذكر:** ${data.count}` : ""}`,
                      inline: false,
                    },
                  )
.addFields({name: `معلومات الذكر`,value: `${data.reference != "" ? `**المرجع:** ${data.reference}` : ""} - ${data.count != "" ? `**تكرار الذكر:** ${data.count}` : ""}`,inline: false,},)
  channel.send({embeds:[AzkarEmbed]})
    }

}
                        
},Time)///async data1  
  
  })
///guilddate1

  
///timer


}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})