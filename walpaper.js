var Key = "Samir";
module.exports.config = {
  name: "wallpaper",
  version: "1.0.1",
  hasPermssion: 0,
  credits: `${Key}`,
  description: "random wallpaper image",
  commandCategory: "edit-image",
  usages: "...",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
  let getWanted = (
    await axios.get(`https://api.zahwazein.xyz/randomimage/wallhp?apikey=7990c7f07144`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
