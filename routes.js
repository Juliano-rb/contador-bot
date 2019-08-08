const OWNER_CHAT_ID = '89797745'
const SendMessage = require('./controllers/SendMessage')

module.exports = (bot)=>{
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

    bot.start((ctx) => ctx.reply('Welcome!'))
    bot.help((ctx) => ctx.reply('Send me a sticker'))
    bot.on('sticker', (ctx) => ctx.reply('👍'))

    bot.help((ctx) => ctx.reply('Send me a sticker'))

    bot.hears('hi', (ctx) => ctx.reply('Hey there'))

    bot.command('send', (ctx) => SendMessage(bot,ctx))
}