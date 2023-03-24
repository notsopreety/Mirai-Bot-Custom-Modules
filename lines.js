var key = "unknown";
module.exports.config = {
	name: "lines",
	version: "1.0.0",
	hasPermssion: 0,
	credits: `${key}`,
	description: "random pickup lines",
	commandCategory: "fun",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/pickuplines`);
var pickupline = res.data.pickupline;
return api.sendMessage(`${pickupline}`, event.threadID, event.messageID)
}


