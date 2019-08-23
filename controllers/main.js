const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

const OWNER_CHAT_ID = process.env.OWNER_CHAT_ID
const SendMessage = require('./SendMessage')

module.exports = (bot) => {

    bot.on('text', (ctx, next) => {
        SendMessage(ctx.tg, OWNER_CHAT_ID, 
            "*New Message:*\n*chat-id*: "+
            ctx.from.id+"\n"+
            "*username*: "+ctx.from.username+"\n"+
            "*text*: _"+ctx.message.text+"_"
        )

        return next(ctx)
    })

    bot.help((ctx) => ctx.reply('Send me a sticker'))
    bot.on('sticker', (ctx) => ctx.reply('Gostei'))
    bot.hears('hi', (ctx) => ctx.reply('Hey there'))
}