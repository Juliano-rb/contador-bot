const SendMessage = require('./SendMessage')

module.exports = (bot) => {
    bot.command('send', (ctx) => {
        const text = ctx.message.text
        const command = text.substring(0,text.search(' '))
        const parameter = text.substring(text.search(' ')+1, text.length)

        console.log(`command: ${command}, parameter: ${parameter}` )

        console.log(`protected area command`);
        
        ctx.reply("*Bem vindo, mestre* ",
            {
                parse_mode:'Markdown'
            }
        )

        if (command === '/send'){
            let chat_id = parameter.substring(0,parameter.search(' '))
            let message = parameter.substring(parameter.search(' ')+1, parameter.length)

            SendMessage(ctx.tg, chat_id, message)

            ctx.reply("*Você mandou a mensagem: * " + message + "\n*Para*: " + chat_id,
                {parse_mode:'Markdown'}
            )
        }    
    })
}