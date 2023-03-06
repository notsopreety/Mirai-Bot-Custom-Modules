module.exports.config = {
  name: "gpt",
  version: "2.0.8",
  hasPermssion: 0,
  credits: "Samir",
  description: "Ask Quiries To Chat GPT",
  commandCategory: "utilities",
  usages: "gpt [question]",
  cooldowns: 5,
  dependencies: {
        "openai": ""
    }
};
module.exports.run = async function({ api, event, args }) {

  
const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
                                apiKey: "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", //PASTE YOUR OPENAI API KEY
                            });
                            const openai = new OpenAIApi(configuration);
  let data = args.join(" ");
                            if (data.length < 2) {
                                api.sendMessage("Wrong use of command Missing content!\n /gpt (questions)", event.threadID);
                            } else {
                                try {
                                    const completion = await openai.createCompletion({
                                        model: "text-davinci-002",
                                        prompt: args.join(" "),
                                        temperature: 0.5,
                                        max_tokens: 2000,
                                        top_p: 0.3,
                                        frequency_penalty: 0.5,
                                        presence_penalty: 0.0,
                                    });
                                    api.sendMessage(completion.data.choices[0].text, event.threadID, event.messageID);
                                }
                                catch (error) {
                                    if (error.response) {
                                        console.log(error.response.status);
                                        console.log(error.response.data);
                                    } else {
                                        console.log(error.message);
                                        api.sendMessage(error.message, event.threadID);
                                    }
                                }
                            }
                        }
