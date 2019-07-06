const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const TelegramBot = require('node-telegram-bot-api');

module.exports = function(){
    const token = process.env.BOT_TOKEN

    console.log(`Starting with polling mode ${eval(process.env.DEV)}`)
    const bot = new TelegramBot(token, {
        polling : eval(process.env.DEV)
    });


    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
      
        // send a message to the chat acknowledging receipt of their message
        bot.sendMessage(chatId, 'Received your message');
    });

    console.log("Bot started.")
}