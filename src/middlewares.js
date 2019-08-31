const logger = require("./middlewares/logger");
const commandArgs = require("./middlewares/commandArgs");
const mainMenu = require("./middlewares/mainMenu")
const newPurchaseMenu = require("./middlewares/newPurchaseMenu");

const Load = bot => {
    bot.use(logger());
    bot.use(commandArgs());
    bot.use(newPurchaseMenu.init());
    mainMenu.register(bot);
};

module.exports = { Load };
