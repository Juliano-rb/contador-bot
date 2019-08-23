module.exports = (tg, chat_id, message) => {
    console.log(`*------------\n/send to chat_id:\x1b[31m ${chat_id}\x1b[0m, content:\x1b[31m${message}\x1b[0m\n*------------`
                );

    tg.sendMessage(chat_id, 
        message,
        {parse_mode:'Markdown'}
    )
}