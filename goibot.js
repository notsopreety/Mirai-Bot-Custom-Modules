const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Samir",
  description: "Bot Will Reply You In Nepali Language",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kathmandu").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["यति🤏 पानी लाज लगदैना जाति बेला पानी बोट बन्ना 🙂 💔 सरम कार्लो वागवान से डार्लो भोसडिके✨⚠️†", "Hey You, Yes You, You Are So Beautiful, i Love You🙂", "Yes Dear, I Am Here...😗", "हजुर भन माया सुन्दै छु😍", "Love you", "Miss YoU Mero Beppy", "यति धेरै माया न गर न बेबी मलाइ।🤏", "एकछोटी बुबु खाने बेबी😋", "😁Smile I am Taking Selfy✌️🤳", "🥺मलाइ छोडी नजाउ न प्यारी", "😙तिम्रो लागि सबैलाई ब्लक गरिदिए बेबी, आउ तिमि र म माया गरम।", "रोक तेरो मम्मी लाइ वन्दिनछु त केटी संगा मस्किन्छ्स भानेरा😂", "यो के फक हो मुजी रन्डी को बान साले खाते मदारचुद" ,"Block Your Babe And Purpose me 🙂💔" ,"Rada Ban Chup Lag🙂", "हामीलाइ पनी मायाले हेर न अरुको बेबी", "Aaihaiii Your Killer Smileee ☺", "Block Kardo Mujhe Warna Pyaar Hojayega💋", "I See You Inside Everyone, That's Why I Love Everyone As More As You🤭", "Aailabu Vanxau Ki Ma Sidhai Vagauna Aau Timi Lai😏", "Vandeu Timi Malai Maya Garxau Vanera 😘", "Chuppa Khau Babe💋", "Mero Maya Lagdaina Hai Timi Lai 🥺", "धेरै न बोल मुजी नत्र तेइ आएर तेरो कानको जाली फुटाईदिन्छु 🥱", "धोकेबाज हउ तिमी धोकेबाज हउ तिमी 🥺", "चिन्ता नगर त मर्यो भने तेरो बुढीलाई म सम्हालछु है साथी😭", "Gulcose भन्दा बढ़ी energy छ तिम्रो मायामा 😋", "Noone But, My Heart Is Falling For You My Preety Boyyy🙌✨", "हेरन सबै मान्छे हाम्रो मायाको डहा गर्न सुरु गरी रको छन😣", "तिमी मेरो CHARGER म तिम्रो MOBILE | अनी DAILY DAILY घपा घप हुन्छ 🥵", "तिम्रो फोन नंबर देऊ भोली CALL मा बोलौला अनी तिम्रो बुबु पनि देखाउनु है बेबी 🥵", "मलाई नबिगार है म सोझो बच्चा हो 😙", "तिमी भएर, अर्थ रहयो मेरो सांसको | तिमि बिना त, यहाँ जित पनि मेरो हार हो। 😥", "Kati Mobile Matra Chalako Muji, Padhne Ni Gar Na😒", "सानो सानो कुरामा नारिसाउन मायालु तिमी। 😭", "Everybody Wanna Steal My Boyy😫", "New Command '/ai' is added. Use /help ai to see detail about Ai command", "You Can Add Me In More Group For Global Use", "Be Careful, We Made This Bot For Educational Purpose As Well As Common Use", "Remember That Don't Use Bot For Harrasment And Bullying Other.", "Hurry Up! I Have To Serve Other Box Too", "Contact My Developer \nhttps://www.facebook.com/notsopreety", "Use /callad Command If You Saw Any Error On Bot, Developer Will Fix It And Also They Will Help You What Typee Of Command You Want", "This Is Beta Test. Many More Commands And Advanced Ai Is Updating In This Bot", "How Can I Help You My Preetiest Client"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "I love you bot") || (event.body.toLowerCase() == "I love you") || (event.body.toLowerCase() == "I love u") || (event.body.toLowerCase() == "i love u bot") || (event.body.toLowerCase() == "Love you")) {
     return api.sendMessage("Love You To My Sweet Heart😇😻 :))", threadID);
   };

    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID);
   };
   
    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "Will you marry me bot") || (event.body.toLowerCase() == "Will you marry me bot")) {
     return api.sendMessage("No, I Have Husband", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hi ae") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "puti") || (event.body.toLowerCase() == "puti")) {
     return api.sendMessage("️ल हेर साले बोका (!) 😒", threadID);
   };

  if ((event.body.toLowerCase() == "randi") || (event.body.toLowerCase() == "randi")) {
     return api.sendMessage("️उनी रण्डी होइनिन, उनी कसैको दिदी बैनी हुन। 😙", threadID);
   };

  if ((event.body.toLowerCase() == "randii") || (event.body.toLowerCase() == "randii")) {
     return api.sendMessage("️उनी रण्डी होइनिन, उनी कसैको दिदी बैनी हुन। 😙", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

  if ((event.body.toLowerCase() == "lado") || (event.body.toLowerCase() == "lado")) {
     return api.sendMessage("️तेरो नी लाडो छ र भाई 🙄", threadID);
   };

  if ((event.body.toLowerCase() == "gulla") || (event.body.toLowerCase() == "gulla")) {
     return api.sendMessage("️तेरो नी Gulla छ र भाई 🙄", threadID);
   };

  if ((event.body.toLowerCase() == "anna") || (event.body.toLowerCase() == "anna")) {
     return api.sendMessage("️Hajurrrr! के भयो बेबी💋", threadID);
   };
  if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("️धेरै हाँस्ने काम नगर, अहिले मुखमा किरा पस्ला🤣", threadID);
   };

  if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("️धेरै हाँस्ने काम नगर, अहिले मुखमा किरा पस्ला🤣", threadID);
   };

  if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("️धेरै हाँस्ने काम नगर, अहिले मुखमा किरा पस्ला🤣", threadID);
   };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "hahaha")) {
     return api.sendMessage("️धेरै हाँस्ने काम नगर, अहिले मुखमा किरा पस्ला🤣", threadID);
   };

  if ((event.body.toLowerCase() == "Anna") || (event.body.toLowerCase() == "Anna")) {
     return api.sendMessage("️Hajurrrr! के भयो बेबी💋", threadID);
   };

  if ((event.body.toLowerCase() == "abhi") || (event.body.toLowerCase() == "abhi")) {
     return api.sendMessage("️Chimpanda Saley Ho🙄", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "muji") || (event.body.toLowerCase() == "muzi")) {
     return api.sendMessage("️कस्लाई मुजी भनिस Humm मुजी 😡", threadID);
   };

   if ((event.body.toLowerCase() == "muji bot") || (event.body.toLowerCase() == "muji bot")) {
     return api.sendMessage("️कस्लाई मुजी भनिस Humm मुजी 😡", threadID);
   };

   if ((event.body.toLowerCase() == "babe") || (event.body.toLowerCase() == "babe")) {
     return api.sendMessage("️ Hajurr Babe😚🖤", threadID);
   };

  if ((event.body.toLowerCase() == "lau") || (event.body.toLowerCase() == "lau")) {
     return api.sendMessage("️देउ न त, लगी हल्छु नि 🤭", threadID);
   };

  if ((event.body.toLowerCase() == "hai") || (event.body.toLowerCase() == "hai")) {
     return api.sendMessage("️अनि त😏", threadID);
   };

  if ((event.body.toLowerCase() == "suna na") || (event.body.toLowerCase() == "sun na")) {
     return api.sendMessage("️Aww भन न सुन्दै छु 😚", threadID);
   };

  if ((event.body.toLowerCase() == "k bho") || (event.body.toLowerCase() == "k vayo")) {
     return api.sendMessage("️केही भाको छैन बेबी 😚🤗", threadID);
   };

  if ((event.body.toLowerCase() == "hjr") || (event.body.toLowerCase() == "hajur")) {
     return api.sendMessage("️के गर्दै छउ माया😇", threadID);
   };

  if ((event.body.toLowerCase() == "khana vo") || (event.body.toLowerCase() == "khana bhayo")) {
     return api.sendMessage("️तिमिले दिएनै कसरी हुनु 🙁", threadID);
   };

  if ((event.body.toLowerCase() == "aau") || (event.body.toLowerCase() == "aau babe")) {
     return api.sendMessage("️का आउने बेबी 🤔", threadID);
   };

  if ((event.body.toLowerCase() == "vana na") || (event.body.toLowerCase() == "bhana na")) {
     return api.sendMessage("️के भन्नू तिमीलाई, तिमीले मेरो Feelings बुझेपो😔", threadID);
   };

  if ((event.body.toLowerCase() == "k") || (event.body.toLowerCase() == "k?")) {
     return api.sendMessage("️K na K😕", threadID);
   };

  if ((event.body.toLowerCase() == "guyz") || (event.body.toLowerCase() == "guys")) {
     return api.sendMessage("️Don't Call Me Guys Cuz I AM Yours😊", threadID);
   };

  if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️का माथी हेर्या बेबी? म त एता छु त🤔", threadID);
   };

  if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🤭")) {
     return api.sendMessage("️के सारो लजाको हो क्या Pagal😏", threadID);
   };

  if ((event.body.toLowerCase() == "ani") || (event.body.toLowerCase() == "Ani")) {
     return api.sendMessage("️के अनि भन्या🤨", threadID);
   };

  if ((event.body.toLowerCase() == "chus") || (event.body.toLowerCase() == "chus")) {
     return api.sendMessage("️आफ्नै दिदी बैनीलाई चुस्न भन मुजी 😑", threadID);
   };

  if ((event.body.toLowerCase() == "k xa") || (event.body.toLowerCase() == "k xa")) {
     return api.sendMessage("️मेरो त सबै छ, तिम्रो के छ 😏", threadID);
   };

  if ((event.body.toLowerCase() == "saley") || (event.body.toLowerCase() == "saley")) {
     return api.sendMessage("️त मेरो दाईको सालो होस😉", threadID);
   };

  if ((event.body.toLowerCase() == "budi") || (event.body.toLowerCase() == "budi")) {
     return api.sendMessage("️हजुर मेरो बुड़ा 🤭", threadID);
   };

  if ((event.body.toLowerCase() == "wife") || (event.body.toLowerCase() == "wife")) {
     return api.sendMessage("️Yes, My Husband🥰", threadID);
   };

  if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("️Good Morningg! अब मुख धोएर बुरुस गर्न जाऊ साथी 🌄", threadID);
   };

  if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night")) {
     return api.sendMessage("️Good Night🌃, Take Care Babe🥺", threadID);
   };

  if ((event.body.toLowerCase() == "eya") || (event.body.toLowerCase() == "eya")) {
     return api.sendMessage("️Ummmmm Ni 😊", threadID);
   };

  if ((event.body.toLowerCase() == "mula") || (event.body.toLowerCase() == "mula")) {
     return api.sendMessage("️मेरो घर आउ, धेरै छ जति खान्छौ खाऊ 😋", threadID);
   };

  if ((event.body.toLowerCase() == "bro") || (event.body.toLowerCase() == "bro")) {
     return api.sendMessage("️But I Am Girl, You Can Call Me Anna", threadID);
   };

  if ((event.body.toLowerCase() == "boy") || (event.body.toLowerCase() == "boy")) {
     return api.sendMessage("️Myann, I Am Girl 😑", threadID);
   };
  
   if ((event.body.toLowerCase() == "beb") || (event.body.toLowerCase() == "beb")) {
     return api.sendMessage("️Hajurr Babe😚🖤", threadID);
   };

   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("️Hajurr Babe😚🖤", threadID);
   };

  if ((event.body.toLowerCase() == "machikne") || (event.body.toLowerCase() == "machikney")) {
     return api.sendMessage("️त मुजी बा चिकने🥱", threadID);
   };

  if ((event.body.toLowerCase() == "amit") || (event.body.toLowerCase() == "amit")) {
     return api.sendMessage("️Amit Editz मुजी रन्डीको बान हो 😕", threadID);
   };

   if ((event.body.toLowerCase() == "bebe") || (event.body.toLowerCase() == "bebe")) {
     return api.sendMessage("Hajurr Babe😚🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "oe") || (event.body.toLowerCase() == "oe") || (event.body.toLowerCase() == "oa")) {
     return api.sendMessage("के भयो Humm छिटो भन म BG छु।🙂", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

  if ((event.body.toLowerCase() == "k gardai xau") || (event.body.toLowerCase() == "k gardai xau")) {
     return api.sendMessage("️केई नाइ, तिमीलाई सम्झिरा🥺", threadID);
   };

  if ((event.body.toLowerCase() == "sut") || (event.body.toLowerCase() == "sut")) {
     return api.sendMessage("️पहिला आफू सूत अनी अरुलाई सुत्न भन🥱", threadID);
   };

  if ((event.body.toLowerCase() == "fight") || (event.body.toLowerCase() == "fyt")) {
     return api.sendMessage("️Sorry, We Are Peace Lover ✌🏻🕊", threadID);
   };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("️Hello, How Are You 😗", threadID);
   };

  if ((event.body.toLowerCase() == "hora") || (event.body.toLowerCase() == "horw")) {
     return api.sendMessage("️Umm, होनी त 😚", threadID);
   };

  if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("️", threadID);
   };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "heloo")) {
     return api.sendMessage("️Hi And Wassup Preety Stranger🙂", threadID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
     return api.sendMessage("️I Am Anna, A Messenger Chatbot Created For Educational Purpose", threadID);
   };
  

  if ((event.body.toLowerCase() == "chikne") || (event.body.toLowerCase() == "chikney")) {
     return api.sendMessage("️नाई न चिक्ने🙃", threadID);
   };

  if ((event.body.toLowerCase() == "Mwah") || (event.body.toLowerCase() == "chuppa") || (event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "👄") || (event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("️Mwahhhhhh💋, लउ चुप्पा खाऊ बेबी 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "bal") || (event.body.toLowerCase() == "Bal") || (event.body.toLowerCase() == "बाल")) {
     return api.sendMessage("तेरो टाउकोमा हेर, कती धेरै छ।❌", threadID);
   };

   if ((event.body.toLowerCase() == "I Love you") || (event.body.toLowerCase() == "I love you")) {
     return api.sendMessage("Love You To My Boyy😇😻", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
