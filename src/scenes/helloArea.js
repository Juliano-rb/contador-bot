const Scene = require("telegraf/scenes/base");
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

const helloArea = new Scene("helloArea");

helloArea.enter(ctx => ctx.reply("Bem vindo", helloArea.Menu));

helloArea.command("start", ctx => ctx.reply("Bem vindo", helloArea.Menu));

helloArea.command("admin", ctx => ctx.scene.enter("protectedArea"));
helloArea.command("compra", ctx => ctx.scene.enter("newPurchase"));

helloArea.help(ctx => ctx.reply("Send me a sticker"));
helloArea.on("sticker", ctx => ctx.reply("Gostei"));
helloArea.on("message", ctx => ctx.reply("E aê meu chapa"));

helloArea.Menu = Markup.keyboard([
    ["/compra"],
    ["📢 Admin", "⭐️ Git", "👥 Share"]
])
    .oneTime()
    .resize()
    .extra();

module.exports = helloArea;
