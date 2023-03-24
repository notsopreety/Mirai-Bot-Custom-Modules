module.exports.config = {
	name: "jojo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Samir",
	description: "jojo image edit",
	commandCategory: "edit-image",
	usages: "jojo or with tag",
	cooldowns: 5,
	dependencies: {"fs-extra": "","discord.js": "","discord-image-generation" :"","node-superfetch": ""}
};

module.exports.run = async ({ event, api, args, Users }) => {
  const DIG = global.nodemodule["discord-image-generation"];
  const Discord = global.nodemodule['discord.js'];
  const request = global.nodemodule["node-superfetch"];
  const fs = global.nodemodule["fs-extra"];
  var id = Object.keys(event.mentions)[0] || event.senderID;
  var id1 = Object.keys(event.mentions)[1] || event.senderID;
  var avatar = (await request.get(`https://api.reikomods.repl.co/canvas/jojo?uid=${id}`)).body;
  let attach = new Discord.MessageAttachment(avatar);
  var path_gay = __dirname + "/cache/jojo.png";
  fs.writeFileSync(path_gay, attach.attachment);
  api.sendMessage({attachment: fs.createReadStream(path_gay)}, event.threadID, () => fs.unlinkSync(path_gay), event.messageID);
    }
