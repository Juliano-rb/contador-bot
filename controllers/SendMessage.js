module.exports = (bot,ctx) => {
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
}