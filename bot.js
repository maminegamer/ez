const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "~";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc2")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : لقد ارسلت رساله لجميع اعضاء عدد الاعضاء المستلمين `); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Scrpit By ┃ KillerFox`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Bot By ┃ KillerFox ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` ~help and عيد سعيد `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});





client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "member-log")
        const embed = new Discord.RichEmbed()
        .setColor('B90C0C')
        .setAuthor(member.user.tag, member.user.avatarURL)
 .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
.setThumbnail(member.avatarURL)
  .setImage('http://i.myniceprofile.com/912/91254.gif')
        .setTimestamp()
        return wc.sendEmbed(embed);
        
});





  client.login("التوكن");
