const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const Telegraf = require('telegraf')
const routes = require('./routes')
const express = require('express')
const expressApp = express()

const BOT_TOKEN = process.env.BOT_TOKEN
const PORT = process.env.PORT || 3000
const APP_URL = process.env.APP_URL

const OWNER_CHAT_ID = '89797745'

const bot = new Telegraf(BOT_TOKEN)

if(! eval(process.env.DEV)){
  console.log("Setting Webhook")

  bot.telegram.setWebhook(`${APP_URL}/${BOT_TOKEN}`)
  expressApp.use(bot.webhookCallback(`/${BOT_TOKEN}`))
}

routes(bot)

if(eval(process.env.DEV)){
  console.log("Starting in DEV mode")
  bot.launch()
}

expressApp.get('/', (req, res) => {
  res.send('Hello World!')
})

expressApp.listen(PORT, () => {
  console.log('Server is listening')
})
