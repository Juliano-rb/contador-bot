const session = require("telegraf/session");
const Stage = require("telegraf/stage");
const helloArea = require("./scenes/helloArea");
const protectedArea = require("./scenes/protectedArea");
const newPurchase = require("./scenes/newPurchase");

const loadStage = bot => {
    const stage = new Stage([helloArea, protectedArea, newPurchase], {
        default: "helloArea"
    });

    bot.use(session());
    bot.use(stage.middleware());
};

module.exports = loadStage;
