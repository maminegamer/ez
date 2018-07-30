const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');

client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
By Majd
`);

});







function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }





var servers = {};






var q1 = ".quran 1"

var q2 = ".quran 2"

var q3 = ".quran 3"

var q4 = ".quran 4"





function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

client.on("ready", () => {
	console.log(`Quran bot is in ${client.guilds.size} servers `)
});

var PREFIX = ".";



//sowar


client.on("message", message => {

	                    if (message.content === q1 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === q2 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === q3 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === q4 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
    
    
    //outher_cummon  
    
  
  if(message.content === ".stop" ) {
      			var servers = {};

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
  }

  if(message.content === ".help") {
    message.channel.send(` playquran
:mosque: .quran 1  :   القران الكريم كامل بصوت الشيخ عبدالباسط عبدالصمد 

:mosque: .quran 2  :   سورة البقرة كاملة - القارئ الحاج ميثم التمار (QURAN)

:mosque: .quran 3  :   القرآن الكريم كامل بصوت الشيخ عبد الرحمن السديس وسعود الشريم 

:mosque: .quran 4  :   القرآن الكريم كامل بصوت الشيخ المعيقلي

:mosque: .stop     : لـ أيقاف تشغيل البوت `)
}
 
	    
});
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = 'H.';
///by-hosam(galaxy-bot-dev)🚫
client.on('message', message => {
    if (message.content.startsWith(prefix + "c.role")) {
     if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
     message.guild.createRole({
  name: 'King',
  color: 'RANDOM',
  position: (1),
  permissions: 'ADMINISTRATOR'
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Prince',
    color: 'RANDOM',
    position: (2),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Commander',
    color: 'RANDOM',
     position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Admin',
    color: 'RANDOM',
    postion: (4),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Vip',
    color: 'RANDOM',
    postion: (5),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Active',
    color: '#030303',
    postion: (6),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**تم انشاء الرتب بنجاح**') ///by-hosam(galaxy-bot-dev)🚫
.catch(console.error);
    }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "c.t")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('rules', 'text')
	 message.guild.createChannel('welcome', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('youtubers', 'text')
	 message.guild.createChannel('giveaway', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('shop', 'text')
	 message.guild.createChannel('pic', 'text')
	 


     

message.channel.sendMessage('**Channel Was Succsesfluy Created**')
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "c.v")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
.catch(console.error);
    }
});



client.login("NDcyNzIwOTk5OTgxMzgzNjgz.DkBEWQ.H4C8Xbh2QZUwwrBfkAK4Y97IEXo");
