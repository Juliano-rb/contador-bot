const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const TelegramBot = require('node-telegram-bot-api');

module.exports = function(){
    const token = process.env.BOT_TOKEN

    const bot = new TelegramBot(token, {
        polling : eval(process.env.DEV)
    });


    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
      
        // send a message to the chat acknowledging receipt of their message
        bot.sendMessage(chatId, 'Received your message');
    });
}