const Scene = require("telegraf/scenes/base");
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

const helloArea = new Scene("helloArea");

helloArea.enter(ctx => ctx.reply("Bem vindo", helloArea.menu));

helloArea.command("start", ctx => ctx.reply("Bem vindo", helloArea.menu));

helloArea.hears("📢 Admin", ctx => ctx.scene.enter("protectedArea"));
helloArea.command("Compra", ctx => ctx.scene.enter("newPurchase"));

helloArea.on("message", ctx =>
    ctx.reply("Olá, humano. Escolha uma das opções do menu.", helloArea.menu)
);

helloArea.menu = Markup.keyboard([
    ["/Compra"],
    ["📢 Admin", "⭐️ Git", "👥 Share"]
])
    .oneTime()
    .resize()
    .extra();

module.exports = helloArea;
