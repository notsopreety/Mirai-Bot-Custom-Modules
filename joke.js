var key = "unknown"; //fixed by samir
module.exports.config = {
	name: "joke",
	version: "1.0.0",
	hasPermssion: 0,
	credits: `${key}`,
	description: "random joke",
	commandCategory: "fun",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.popcat.xyz/joke`);
var joke = res.data.joke;
return api.sendMessage(`${joke}`, event.threadID, event.messageID)
}


