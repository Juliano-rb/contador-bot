const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const Telegraf = require('telegraf');
const express = require('express');
const expressApp = express();

const BOT_TOKEN = process.env.BOT_TOKEN;
const PORT = process.env.PORT || 3000;
const APP_URL = process.env.APP_URL;

console.log('token' + BOT_TOKEN);
console.log('porta:' + PORT);
console.log('url:' + APP_URL);

const bot = new Telegraf(BOT_TOKEN);
bot.telegram.setWebhook(`${APP_URL}/bot${BOT_TOKEN}`);
expressApp.use(bot.webhookCallback(`/bot${BOT_TOKEN}`));
/*
 your bot commands and all the other stuff on here ....
*/
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// and at the end just start server on PORT
expressApp.get('/', (req, res) => {
  res.send('Hello World!');
});
expressApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});