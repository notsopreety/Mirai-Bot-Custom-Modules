module.exports.config = {
	name: "wyr",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Samir",
	description: "would you rather choose",
	commandCategory: "study",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/wyr`);
var ops2 = res.data.ops2;
var ops1 = res.data.ops1;
return api.sendMessage(`Would You Rather\n\n1: ${ops1}\n\nOR\n\n2: ${ops2}`, event.threadID, event.messageID)
}


