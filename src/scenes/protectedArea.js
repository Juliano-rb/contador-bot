const Scene = require("telegraf/scenes/base");
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");
const SendMessage = require("../controllers/SendMessage");

const protectedArea = new Scene("protectedArea");

protectedArea.enter(ctx =>
    ctx.reply("Portas se abriram...", protectedArea.menu)
);

protectedArea.command("send", ctx => {
    const { text } = ctx.message;
    const command = text.substring(0, text.search(" "));
    const parameter = text.substring(text.search(" ") + 1, text.length);

    console.log(`protected area command: ${ctx.state.command}`);

    ctx.reply("*Mensagem enviada* ", {
        parse_mode: "Markdown"
    });

    if (command === "/send") {
        const chatId = parameter.substring(0, parameter.search(" "));
        const message = parameter.substring(
            parameter.search(" ") + 1,
            parameter.length
        );

        SendMessage(ctx.tg, chatId, message);

        ctx.reply(`*Você mandou a mensagem: * ${message}\n*Para*: ${chatId}`, {
            parse_mode: "Markdown"
        });
    }
});

protectedArea.command("/Inicio", ctx => ctx.scene.enter("helloArea"));

protectedArea.menu = Markup.keyboard(["/Inicio"])
    .oneTime()
    .resize()
    .extra();

module.exports = protectedArea;
