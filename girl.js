module.exports.config = {
  name: "girl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Samir",
  description: "Random Girl Pictures.",
  commandCategory: "Image",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://api.zahwazein.xyz/randomasupan/justina?apikey=5c3e21631c",
"https://api.zahwazein.xyz/randomasupan/rose?apikey=5c3e21631c",
"https://api.zahwazein.xyz/randomasupan/china?apikey=5c3e21631c",
"https://api.zahwazein.xyz/randomasupan/vietnam?apikey=5c3e21631c",
"https://api.zahwazein.xyz/randomasupan/ryujin?apikey=5c3e21631c",
"https://api.zahwazein.xyz/randomasupan/cecan?apikey=5c3e21631c",
"https://api.zahwazein.xyz/randomasupan/kayes?apikey=5c3e21631c",
"https://api.zahwazein.xyz/randomasupan/kpop?apikey=5c3e21631c",
"https://api.zahwazein.xyz/randomasupan/notnot?apikey=5c3e21631c",
"https://api.zahwazein.xyz/randomasupan/thailand?apikey=5c3e21631c",
  ];
	 var callback = () => api.sendMessage({body:`Here's Your Favourite Girl😋`,attachment: fs.createReadStream(__dirname + "/cache/6.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/6.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/6.jpg")).on("close",() => callback());
   };
