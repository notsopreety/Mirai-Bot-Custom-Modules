module.exports.config = {
    name: "movie",
    version: "1.0.0",
    hasPermision: 0,
    credit: "Samir",
    description: "get movie info",
    commandCategory: "entertainment",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
        let samir = args.join(" ");
	const res = await axios.get(`https://api.popcat.xyz/imdb?q=${samir}`);
	console.log(res.data);
	var data = res.data;
	let callback = function() {
            return api.sendMessage({
                body:`Movie Title: ${data.title}\nReleased Date: ${data.released}\nRuntime: ${data.runtime}\nType: ${data.genres}\nDirector: ${data.director}\nWriter: ${data.writer}\nActors: ${data.actors}\nAvailable Languages: ${data.languages}\nCountry: ${data.country}\nWon Awards: ${data.awards}\nTotal Rating Votes: ${data.votes}\nRating: ${data.rating}\nBox Office: ${data.boxoffice}\nProduction: ${data.production}\n\nSummary: ${data.plot}`,
                attachment: fs.createReadStream(__dirname + `/cache/poster.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/poster.png`), event.messageID);
        };
		return request(encodeURI(data.poster)).pipe(fs.createWriteStream(__dirname + `/cache/poster.png`)).on("close", callback);
		} catch (err) {
        console.log(err)
        return api.sendMessage(`Add text lmao`, event.threadID)
    }
}
