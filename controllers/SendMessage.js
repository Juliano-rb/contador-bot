const col = {
    default : '\x1b[0m',
    yellow : '\x1b[33m',
    red : '\x1b[31m',
    blue : '\x1b[34m',
    magenta : '\x1b[35m'

}

module.exports = (tg, chat_id, message) => {
    console.log(`${col.yellow}*------------\n${col.default}/send to chat_id: ${col.red} ${chat_id}${col.default}\ncontent:\x1b[31m${message}\n${col.yellow}*------------${col.default}`
                );

    tg.sendMessage(chat_id, 
        message,
        {parse_mode:'Markdown'}
    )
}