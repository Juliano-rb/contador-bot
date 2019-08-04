const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })
const Telegraf = require('telegraf')
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

bot.on('text', (ctx, next) => {
    bot.telegram.sendMessage(OWNER_CHAT_ID, 
      "*New Message:*\n*chat-id*: "+
      ctx.from.id+"\n"+
      "*username*: "+ctx.from.username+"\n"+
      "*text*: _"+ctx.message.text+"_",
      {parse_mode:'Markdown'}
    )
    //console.log(ctx.message.entities)
    return next(ctx)
})

if(eval(process.env.DEV)){
  console.log("Starting in DEV mode")
  bot.launch()
}

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.command('send', (ctx) => {
  let input = ctx.message.text
  input = input.substring(input.search(' ')+1)

  let chat_id = input.substring(0,input.search(' '))
  let message = input.substring(input.search(' ')+1)

  //let params = ctx.message.text.split(" ");
  console.log(`send message to chat_id:${chat_id}, content:${message}`);

  bot.telegram.sendMessage(chat_id, 
    message,
    {parse_mode:'Markdown'}
  )

  ctx.reply("*Você mandou a mensagem: * " + message + "\n*Para*: " + chat_id,
  {parse_mode:'Markdown'}
  )
})

expressApp.get('/', (req, res) => {
  res.send('Hello World!')
})

expressApp.listen(PORT, () => {
  console.log('Server is listening')
})
