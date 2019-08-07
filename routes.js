const OWNER_CHAT_ID = '89797745'

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

    bot.command('send', (ctx) => {
        let input = ctx.message.text
        input = input.substring(input.search(' ')+1)

        let chat_id = input.substring(0,input.search(' '))
        let message = input.substring(input.search(' ')+1)

        //let params = ctx.message.text.split(" ");
        console.log(`/send to chat_id:${chat_id}, content:${message}`);

        bot.telegram.sendMessage(chat_id, 
            message,
            {parse_mode:'Markdown'}
        )

        ctx.reply("*Você mandou a mensagem: * " + message + "\n*Para*: " + chat_id,
        {parse_mode:'Markdown'}
        )
    })
}