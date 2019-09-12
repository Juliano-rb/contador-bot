const Scene = require("telegraf/scenes/base");
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

const newPurchase = new Scene("newPurchase");

newPurchase.enter(ctx => ctx.reply("Cadastre a compra aqui", newPurchase.menu));

newPurchase.command("/Inicio", ctx => ctx.scene.enter("helloArea"));

newPurchase.menu = Markup.keyboard(["/NovoItem", "/RemoverItem", "/Inicio"])
    .oneTime()
    .resize()
    .extra();

module.exports = newPurchase;
