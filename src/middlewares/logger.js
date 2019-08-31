const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", "./", ".env") });
const SendMessage = require("../controllers/SendMessage");

const { OWNER_CHAT_ID } = process.env;
const { log } = eval(process.env);

const logger = () => (ctx, next) => {
    if (!log) return next();

    console.log("logging message");

    SendMessage(
        ctx.tg,
        OWNER_CHAT_ID,
        `*New Message:*\n*chat-id*: ${ctx.from.id}\n` +
            `*username*: @${ctx.from.username}\n` +
            `*text*: _${ctx.message ? ctx.message.text : ""}_`
    );

    return next();
};

module.exports = logger;
