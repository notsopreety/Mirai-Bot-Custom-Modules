var key = "Samir";
module.exports.config = {
	name: "fact",
	version: "1.0.0",
	hasPermssion: 0,
	credits: `${key}`,
	description: "random fact",
	commandCategory: "study",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/fact`);
var fact = res.data.fact;
return api.sendMessage(`${fact}`, event.threadID, event.messageID)
}


