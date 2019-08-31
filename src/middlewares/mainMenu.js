const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");

const register = bot => {
    bot.command("/start", ({ reply }) => {
        return reply(
            "Custom buttons keyboard",
            Markup.keyboard([
                ["/compra"],
                // ["☸ Setting"],
                ["📢 Admin", "⭐️ Git", "👥 Share"] // Row3 with 3 buttons
            ])
                .oneTime()
                .resize()
                .extra()
        );
    });
};

module.exports = { register };
