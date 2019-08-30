const Scene = require("telegraf/scenes/base");

const newPurchase = new Scene("newPurchase");

newPurchase.enter(ctx => ctx.reply("Cadastre a compra aqui"));


module.exports = newPurchase;
