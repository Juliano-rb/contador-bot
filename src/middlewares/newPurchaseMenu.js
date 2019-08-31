const TelegrafInlineMenu = require("telegraf-inline-menu");

const main = new TelegrafInlineMenu("new purchase");
const addItem = new TelegrafInlineMenu("new item");

main.setCommand("go");

main.submenu("Novo item", "itemrs", addItem);

addItem.simpleButton("Adiciona!", "a", {
    doFunc: ctx => ctx.reply("Maiss!")
});

module.exports = main;
