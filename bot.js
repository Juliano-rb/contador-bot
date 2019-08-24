const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const Telegraf = require('telegraf')

const contexts = require('./contexts')
const BOT_TOKEN = process.env.BOT_TOKEN
const bot = new Telegraf(BOT_TOKEN)

contexts(bot)

if(eval(process.env.DEV)){
    console.log("Starting in DEV mode")
    bot.launch()
}

module.exports = bot
  