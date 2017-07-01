const Discord = require('discord.js');
const fs = require('fs');
const music = require('discord.js-music');

var bot = new Discord.Client();

bot.on('ready', function() {
    console.log(`I am ${bot.user.username}, and I am ready to go.`);
//    bot.channels.get('322517098846748673').send(`Fucking twats, who do you think you are.`);
    
});

var prefix = "-";

var currentCommands = "currentstate, level, expshop, back, cmds, kick, ban, warn, removewarn, priest, suicide, 8ball, roll, vasectomy";
var upcomingCommands = "Unban, slowmode";
var musicCommands = "play, skip, pause, unpause, queue (Can't read over 2k words), shuffle, stop,";
var upcomingMusicCommands = "rpl (Repeats the playlist)";
var botOwnerCommands = "fskip, setgame";

var botVersion = "0.2.3";



bot.on('message', (message) => {
    console.log(message.content);

const args = message.content.split(" ");
const command = args.shift().slice(prefix.length);

//if (message.content.startsWith(prefix) && message.channel.id !== "322571090171920384" && message.channel.id !== "312786434316566528") {
//    message.reply("You are not allowed to do commands in this channel, use the Bot Spam channel please in the Cancerian Kingdom, or General in the EMQ UIM server..");
//    message.delete();
//    return;

//}

//    if(message.content.startsWith(prefix + 'invite')){
//        message.guildChannel.generateInvite();
//    }

    if(message.content.startsWith(prefix + 'cmds')) {
        let embed2 = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription('PREFIX IS **-**. There are Current commands, upcoming commands, music commands, upcoming music commands, and bot owner commands.')
        .addField('Commands', 'Below are a list of commands')
        .addField('The list', 'There are Current commands, upcoming commands, music commands, upcoming music commands, and bot owner commands.')
        .addField('**Current Commands**', currentCommands)
        .addField('**Upcoming Commands**', upcomingCommands)
        .addField('**Music Commands**', musicCommands)
        .addField('**Upcoming Music Commands**', upcomingMusicCommands)
        .addField('**Bot Owner Commands**', botOwnerCommands)
        .addField('My Owner', "__**RiptidesTacos**__ is my owner, message him if you want to see certain commands added.")

        message.channel.sendEmbed(embed2);
    }

    if(message.content.startsWith(prefix + 'back')){
        message.channel.send('I\'m back babes!');

    }

    if(message.content.startsWith(prefix + "currentstate")){
        message.author.send(`I, ${bot.user.username}, am currently being remade. I will be improved beyond what I was before. My current version is ` + botVersion);
        message.channel.send('Version number is: ' + botVersion);
    }

    if(message.content.startsWith(prefix + 'vasectomy')){
        message.channel.send('Lol, here you go :P https://www.youtube.com/watch?v=yjiAq89cy6w');

        }

//    if(message.content.startsWith(prefix + "cmds")){
//        message.channel.send(`The PREFIX is ***${prefix}***.
//        __**Commands are to be done in the *bot_spam* text channel.**__
//        The current commands are: ***${currentCommands}***.
//        The upcoming commands are: ***${upcomingCommands}***.
//        The music commands are: ***${musicCommands}***.
//        The upcoming music commands are: ***${upcomingMusicCommands}***.
//        The commands that only the bot owner can use, for now, is/are: ***${botOwnerCommands}***.
//        Any suggestions on what to add? PM RiptidesTacos, my creator.`);
        // People who can kick are: Archbishops and above.
        // People who can ban are: Saints and above.

//    }

    if(message.content == "yee"){
        
        message.channel.send("honk honk honk honk honk honk honk, honk honk, honk, honk, honk, yeee");
       }

    if(message.content.startsWith(prefix + "suicide")){
        message.channel.send('Please call this number: __1-800-273-8255__');
    }

    if(message.content.startsWith(prefix + 'avatar')){
        message.reply(message.author.avatarURL);
    
    }

    if(message.content.startsWith(prefix + 'ping')){
        message.channel.send('Pinging...').then(m => m.edit(`:ping_pong: Pong'd back at \`${m.createdTimestamp - message.createdTimestamp}ms\``));
    }

    if(message.content == "whats the deal"){
        message.channel.send('WITH AIRPLANE FOOD?!');
        
    }

    if(message.content.startsWith(prefix + 'Mr. Booze')){
        message.channel.send('You can testify here: https://www.youtube.com/watch?v=Zb3yEUsfzP0');
        
    }

    if(message.content.startsWith(prefix + 'purge')){
             var Admi = message.guild.roles.find("name","Nurses");
             if(message.member.roles.has(Admi.id)){
                 var messagecount = args[0];
                message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                 message.reply(` has removed ${messagecount} messages with the purge command.`);
                }
            }

    if(message.content.startsWith(prefix + "Zanderman")){
        var Recept = message.guild.roles.find("name", "Receptionists");
        if(!message.member.roles.has(Recept.id)){
            return message.reply('You do not have the correction permissions to use this command.');
        } else {
            if(message.member.roles.has(recept.id)){
                return message.channel.send(`__${message.author}__, is the best god damn fucking receptionist on this planet!`);
            }
        }
    }

if(message.content.startsWith(prefix + "kick")){
        var Admi = message.guild.roles.find("name", "Nurses");
        if(!message.member.roles.has(Admi.id)){
            return message.reply('You do not have the correct permissions to use this command.');
        }
        if(message.mentions.users.size == 0){
            return message.reply('No users mentioned.');
        }
        var kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember){
            return message.reply('That user does not exist!');
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
            return message.reply("I do not have the correct permissions to use this command. Give me the correct permissions and try again.");
        }
        kickMember.kick();
    }

    if(message.content.startsWith(prefix + "kick")){
        var Admin = message.guild.roles.find("name", "Doctors");
        if(!message.member.roles.has(Admin.id)){
            return message.reply('You do not have the correct permissions to use this command.');
        }
        if(message.mentions.users.size == 0){
            return message.reply('No users mentioned.');
        }
        var kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember){
            return message.reply('That user does not exist!');
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
            return message.reply("I do not have the correct permissions to use this command. Give me the correct permissions and try again.");
        }
        kickMember.kick();
    }

    if(message.content.startsWith(prefix + "ban")){
        var Admi = message.guild.roles.find("name", "Nurses");
        if(!message.member.roles.has(Admi.id)){
            return message.reply('You do not have the correct permissions to use this command.');
        }
        if(message.mentions.users.size == 0){
            return message.reply('No users mentioned.');
        }
        var banMember = message.guild.member(message.mentions.users.first());
        if(!banMember){
            return message.reply('That user does not exist!');
        }
        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
            return message.reply('I do not have the correct permissions to use this command.');
        }
        banMember.ban();
    }

    if(message.content.startsWith(prefix + "ban")){
        var Admin = message.guild.roles.find("name", "Doctors");
        if(!message.member.roles.has(Admin.id)){
            return message.reply('You do not have the correct permissions to use this command.');
        }
        if(message.mentions.users.size == 0){
            return message.reply('No users mentioned.');
        }
        var banMember = message.guild.member(message.mentions.users.first());
        if(!banMember){
            return message.reply('That user does not exist!');
        }
        if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")){
            return message.reply('I do not have the correct permissions to use this command.');
        }
        banMember.ban();
    }

    const discord = require('discord.js');

    const fs = require('fs');

    let warns = JSON.parse(fs.readFileSync('./WarnUser.json', 'utf8'));  

    if(message.content.startsWith(prefix + 'warn')){
         var warnUser = message.guild.member(message.mentions.users.first());
     if(!warns[warnUser.id]) warns[warnUser.id] = {
         warns: 0
     };
         warns[warnUser.id].warns++;

     // And then, we save the edited file.
         fs.writeFile('./WarnUser.json', JSON.stringify(warns), (err) => {
          if (err) console.error(err)
     });

      		
        message.channel.send(warnUser + ", has been warned.");
       
    }

    if(message.content.startsWith(prefix + 'roll')){
        var roll = Math.floor(Math.random() * 35) + 1;
        message.reply("You have rolled a " + roll);

    }

    if(message.content.startsWith(prefix + '8ball')){
        var rand = ['Yes', 'No', 'Maybe', `That's plausible`, 'Not likely to happen', 'Check again later', 'Absolutely'];
        var yesNo = rand[Math.floor(Math.random() * rand.length)];
        message.channel.send(/*'Your answer is: ' + */yesNo);

    }

    var arg = message.content.split(' ').slice(1);
    var argresult = arg.join(' ');

    if(message.content.startsWith(prefix + 'setgame')){
        if(!argresult) argresult = null;
        bot.user.setGame(argresult);

    }

});


bot.on('guildMemberAdd', member => {
    var guild = member.guild;
    guild.defaultChannel.send(`${member.user.username}, has joined the discord.`);

});

bot.on("guildMemberAdd", (member) => {
  member.addRole("330253001925328896");
  
});

bot.on('guildMemberRemove', oldMember => {
    var guild = oldMember.guild;
    guild.defaultChannel.send(`${oldMember.user.username}, has left the discord.`);
    
});

bot.on('guildBanAdd', (guild, user) => {
    guild.defaultChannel.send(`${user.username}, has just been banned from the discord.`);

});

bot.on('guildBanRemove', (guild, user) => {
    guild.defaultChannel.send(`${user.username}, has just been unbanned from the discord.`);

});

bot.on('guildWarn', member => {
    var guild = member.guild;
    guild.defaultChannel.send(`${member.user.username}, has just been kicked.`);

});

bot.on('guildKickAdd', member => {
    var guild = guild.member;
    guild.defaultChannel.send(`${member.user.username}, has just been kicked from the server.`);
    
});

const ytdl = require('ytdl-core');
const request = require("request");
const getYouTubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const youtube = require('./youtube.js');
 
console.log("Setting up settings.");
console.log("Setting up settings..");
console.log("Setting up settings...");
console.log("Settings have been setup.");

var prefix = "-";

var config = JSON.parse(fs.readFileSync('./settings.json', 'utf8'));

const yt_api_key = config.yt_api_key;
const bot_controller = config.bot_controller;
 
var queue = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];

console.log('Setting up youtube API key.');
youtube.setApiKey(yt_api_key);

bot.on('message', function(message) {
    const member = message.member;
    const msg = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(" ");

if(msg.startsWith(prefix + 'shuffle')){
    queue = shuffle(queue);
    //message.reply(`You have successfully shuffled the songs in the queue.`);
    message.reply('successfully shuffled: **' + queue.length + '** songs.');

}

if(msg.startsWith(prefix + 'askip')){
    var skipAmount = args[0];
    songskip(skipAmount[0]);
    message.reply('You have skipped: ' + skipAmount + ' songs.')
}

if(msg.startsWith(prefix + 'stop')){
    queue = [];
    dispatcher.end();
    message.reply('Successfully stopped.');
}

if(msg.startsWith(prefix + 'rpl')){
    //queue = replaypl(queue);
    //queue.unshift(queue.length);
    //message.reply('You are replaying the playlist');
}

if(msg.startsWith(prefix + 'rqueue')){
    queue = [];
    message.reply('The queue has been cleared.')
}

//    console.log(queue.length);
//        queue.unshift(queue[queue.length]);
//        message.reply('The playlist will be repeated');
//          message.reply('This command is currently being worked on.');

    if (msg.indexOf("discord.gg") > -1) {
        message.reply("You are not allowed to post other discords here!");
        message.delete();
        return;
    } else if (msg.startsWith(prefix + 'skip')) {
        if (skippers.indexOf(message.author.id) == -1) {
            skippers.push(message.author.id);
            skipReq++;
                skip_song();
                message.reply("The song has been skipped.");
        }
    } else if (msg.startsWith(prefix + 'fskip') && message.author.id === "240965846480977920") {
        try {
            skip_song();
                message.reply('You have force skipped the song.');
        } catch (err) {
            //console.log(err);
                message.reply('There are no songs playing right now!');
}
    }

    else if (msg.startsWith(prefix + 'play')) {
        if (member.voiceChannel || voiceChannel != null) {
            if (queue.length > 0 || isPlaying) {
                if (!message.content.toLowerCase().indexOf("list=") > -1) {
                    youtube.getID(args, function(id) {
                        add_to_queue(id);
                        fetchVideoInfo(id, function(err, videoInfo) {
                            if (err) throw new Error(err);
                            message.reply(" added to queue: **" + videoInfo.title + "**")
                            queueNames.push(videoInfo.title);
                        });
                    });
                } else {
                    youtube.getPlayListSongs(message.content.match(/list=(.*)/)[message.content.match(/list=(.*)/).length - 1], 50, function(arr) {
                        arr.forEach(function(e) {
                            add_to_queue(e.snippet.resourceId.videoId);
                            queue.push(e.snippet.title);
                        });
                        playMusic(queue[0], message, false);
                        youtube.getPlayListMetaData(message.content.match(/list=(.*)/)[message.content.match(/list=(.*)/).length - 1], 50, function(data) {
                            message.reply(" now playing playlist: `" + data.snippet.title + "` with a total of `" + queueNames.length + "` songs.");
                        });
                    });
                }
            } else {
                isPlaying = true;
                if (args.toLowerCase().indexOf("list=") === -1) {
                    console.log(args.toLowerCase().indexOf("list=") === -1);
                    youtube.getID(args, function(id) {
                        queue.push(id);
                        playMusic(id, message, false);
                        fetchVideoInfo(id, function(err, videoInfo) {
                            if (err) throw new Error(err);
                            queueNames.push(videoInfo.title);
                            message.reply(" now playing: **" + videoInfo.title + "**")
                        });
                    });
                } else {
                    youtube.getPlayListSongs(message.content.match(/list=(.*)/)[message.content.match(/list=(.*)/).length - 1], 50, function(arr) {
                        arr.forEach(function(e) {
                            add_to_queue(e.snippet.resourceId.videoId);
                            queueNames.push(e.snippet.title);
                        });
                        playMusic(queue[0], message, false);
                        youtube.getPlayListMetaData(message.content.match(/list=(.*)/)[message.content.match(/list=(.*)/).length - 1], 50, function(data) {
                            message.reply(" now playing playlist: `" + data.snippet.title + "` with a total of `" + queueNames.length + "` songs.");
                        });
                    });
                }
            }
        } else {
            message.reply('You need to join a voice channel first!');
        }
    } else if (msg.startsWith(prefix + 'pause')) {
        try {
            dispatcher.pause();
            message.reply("Pausing!");
        } catch (error) {
            message.reply("No song playing");
        }
    } else if (msg.startsWith(prefix + 'unpause')) {
        try {
            dispatcher.resume();
        message.reply('The song has been unpaused!');
        } catch (error) {
            message.reply("No songs to unpause at this time.");
        }
//    } else if (/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig.exec(msg) != null && message.channel.id !== "322571090171920384"  && message.channel.id !== "312786434316566528") {
//        bot.channels.get('322571090171920384').send(message.author + " said in an **incorrect** chat: \n\n\n" + message.content);
//        message.delete();
    } else if (msg.startsWith(prefix + "join")) {
        search_video(backQueue[currentBackQueue], function(id) {
            playMusic(id, message, true);
            isPlaying = true;
            message.reply(" joining voice chat -- " + message.member.voiceChannel.name + " -- and starting radio!");
        });
    } else if (msg.startsWith(prefix + "queue")) {
        var ret = "\n\n`";
        for (var i = 0; i < queueNames.length; i++) {
            ret += (i + 1) + ": " + queueNames[i] + (i === 0 ? " **(Current)**" : "") + "\n";
        }
        ret += "`"
        message.reply(ret);
    } 
    
    if(msg.startsWith(prefix + 'replay')){
        queue.unshift(queue[0]);
        message.reply('The song will replay as soon as it is over.');
}

});
 
function skip_song() {
    dispatcher.end();
    queueNames.shift();

}

function songskip(array) {
    dispatcher.end();
    queueNames.shift();
}
 
function playMusic(id, message, backQueueUsed) {
    voiceChannel = message.member.voiceChannel;
 
    voiceChannel.join()
        .then(function(connection) {
            stream = ytdl("https://www.youtube.com/watch?v=" + id, {
                filter: 'audioonly'
            });
            skipReq = 0;
            skippers = [];
 
            dispatcher = connection.playStream(stream);
            dispatcher.on('end', function() {
                skipReq = 0;
                skippers = [];
                    queue.shift();
                if (queue.length === 0) {
                    queue = [];
                    isPlaying = false
                } else {
                    playMusic(queue[0], message);
                }
            });
        });
}
 
//function getID(str, cb) {
//    if (isYoutube(str)) {
//        cb(getYouTubeID(str));
//    } else {
//        search_video(str, function(id) {
 //           cb(id);
 //       });
 //   }
//}
 
function add_to_queue(strID) {
    if (youtube.isYoutube(strID)) {
        queue.push(getYouTubeID(strID));
    } else {
        queue.push(strID);
    }
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (1 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function replaypl(array) {
    var stillIndex = array.length,
    stillValue, staySame;


    while(1 >= stillIndex) {
        staySame = Math.floor(stillIndex * 2);
        stillIndex++;

        stillValue = array[stillIndex];
        array[stillIndex] = array[staySame];
        array[staySame] = stillValue;
        
    }

    return array;
}
 
//function isYoutube(str) {
//    return str.toLowerCase().indexOf("youtube.com") > -1;
//}
 
//function search_video(query, callback) {
//    request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
//        var json = JSON.parse(body);
//        callback(json.items[0].id.videoId);
//    });
//}


bot.on('message', (message) => {

var levelPrefix = "=";

let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));

  //if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points+= 1/4;

//    var needXP = userData.points * Math.floor(1 / 0.5);
//    if(message.author.id.points >= needXP){
//        curLevel += 1;
//    }

  let curLevel = Math.floor(0.6 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`Hey you bastard! You"ve leveled up to level **${curLevel}**!`);
  }
  if(message.content.startsWith(prefix + 'dedicated')){
      console.log(curLevel);
      if(curLevel >= 5){
      message.reply(`Your current level is: **${curLevel}** You are a dedicated member of this discord. You may use the command **-expshop**.`);
} else if(curLevel < 5){
          message.reply('You are not a dedicated member yet.');
}
}

//var needXP = Math.floor(Math.ceil(userData.points * 1.5))

  var pointShop = userData.points;
  if(message.content.startsWith(prefix + 'expshop') && curLevel >= 5){
      var list = 
      [
          `**CustomRole : 235**
          **Manage Roles Command Access : 450**
          **Manage Channels Command Access : 600**
          **Manage Nicknames Command Access : 850**
          **Mute Member Command Access : 1300**`
      ];
//      message.reply('You are above level 5, you may enter the expshop.\n');
      message.reply('The current items in the point shop are: ' + list);
  } else {
      if(message.content.startsWith(prefix + 'expshop') && curLevel < 5){
          message.reply('You cannot use the exp shop until you are level 5; you are level: ' + curLevel)
      }
  }


  if (message.content.startsWith(prefix + "level")) {

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription('*A member of the Cancerian Kingdom*')
    .setColor("#8378BD")
    .addField("**Name**", `${message.author.id} || ${message.author.username}#${message.author.discriminator}`)
    .addField("**Level**", curLevel)
    .addField("**Experience**", userData.points);

    message.channel.sendEmbed(embed);
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => { 
    if (err) console.error(err)
  
  });
});

const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

 // pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
  http.get('http://baconbot2.herokuapp.com');
}, 900000);

bot.login('MzEzNDU1MjMwMjcwMzA4MzU1.DBoW8Q.2gYvpsWQ_mQ8hOD8y8ugoKOG_qs');