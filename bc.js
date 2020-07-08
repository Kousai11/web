const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "%";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send("ليس عندك صلاحيات يا برو ");
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== '').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== '').size}\` : message send to `); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : ADHAMKING`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ADHAMKING ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(` ONEHACKER BOT *help  `,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NjM0NDM3NzMzMjMzNzIxMzQ0.XaigPQ.7Oe3du1gruGLrRWHt5OkEeEHGvc");