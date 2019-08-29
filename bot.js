const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const Telegraf = require('telegraf')
const Stage = require('./Stage')
const logger = require('./middlewares/logger')
const commandArgs = require('./middlewares/commandArgs')

const BOT_TOKEN = process.env.BOT_TOKEN
const bot = new Telegraf(BOT_TOKEN)

bot.use(logger())
bot.use(commandArgs())

Stage(bot)

if(eval(process.env.DEV)){
    console.log("Starting in DEV mode")

    bot.launch()
}

module.exports = bot;
