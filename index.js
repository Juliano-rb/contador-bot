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

bot.telegram.setWebhook(`${APP_URL}/${BOT_TOKEN}`)
expressApp.use(bot.webhookCallback(`/${BOT_TOKEN}`))

bot.on('text', (ctx, next) => {
    bot.telegram.sendMessage(OWNER_CHAT_ID, 
      "*New Message:*\n*chat-id*: "+
      ctx.from.id+"\n"+
      "*username*: "+ctx.from.username+"\n"+
      "*text*: "+ctx.message.text,
      {parse_mode:'Markdown'}
    )
    //console.log(ctx.message.entities)
    return next(ctx)
})

if(eval(process.env.DEV)){
  bot.launch()
}

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.help((ctx) => ctx.reply('Send me a sticker'))

bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.command('send', (ctx) => {
  let message = ctx.message.text
  let params = ctx.message.text.split(" ");
  console.log(params);

  bot.telegram.sendMessage(params[1], 
    params[2],
    {parse_mode:'Markdown'}
  )

  ctx.reply("Oi, vc mandou o comando send na mensagem " + ctx.message.text)
})


expressApp.get('/', (req, res) => {
  res.send('Hello World!')
})

expressApp.listen(PORT, () => {
  console.log('Server is listening')
})
