const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const Telegraf = require('telegraf')
const express = require('express')
const expressApp = express()

const BOT_TOKEN = process.env.BOT_TOKEN
const PORT = process.env.PORT || 3000
const APP_URL = process.env.APP_URL

const bot = new Telegraf(BOT_TOKEN)
expressApp.use(bot.webhookCallback(`/${BOT_TOKEN}`))
bot.telegram.setWebhook(`${APP_URL}`)

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears('bolsonaro', (ctx) => 
    ctx.reply('https://api.telegram.org/bot{my_bot_token}/setWebhook?url={url_to_send_updates_to}')
)

expressApp.get('/', (req, res) => {
    res.send('Hello World!')
})

expressApp.listen(PORT, () => {
  console.log('Server is listening')
})