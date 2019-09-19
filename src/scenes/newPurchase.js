const Scene = require("telegraf/scenes/base");
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

const newPurchase = new Scene("newPurchase");

newPurchase.enter(ctx =>
    ctx.reply("Cadastre a compra aqui", newPurchase.inlineMenu)
);

newPurchase.command("/Inicio", ctx => ctx.scene.enter("helloArea"));

newPurchase.menu = Markup.keyboard(["/NovoItem", "/RemoverItem", "/Inicio"])
    .oneTime()
    .resize()
    .extra();

newPurchase.inlineMenu = Extra.HTML().markup(m =>
    m.inlineKeyboard([
        m.callbackButton("Novo Item", "newItem"),
        m.callbackButton("Pepsi", "Pepsi")
    ])
);

newPurchase.action("newItem", (ctx, next) => {
    return ctx
        .reply(
            "(criar novo item e editar, atualizar mensagem anterior com o novo item)"
        )
        .then(() => next());
});

module.exports = newPurchase;
