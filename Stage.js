const session = require("telegraf/session");
const Stage = require("telegraf/stage");
const helloArea = require("./scenes/helloArea");
const protectedArea = require("./scenes/protectedArea");

const loadStage = bot => {
    const stage = new Stage([helloArea, protectedArea], {
        default: "helloArea"
    });

    bot.use(session());
    bot.use(stage.middleware());
};

module.exports = loadStage;
