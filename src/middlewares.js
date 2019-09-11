const logger = require("./middlewares/logger");
const commandArgs = require("./middlewares/commandArgs");

const Load = bot => {
    bot.use(logger());
    bot.use(commandArgs());
};

module.exports = { Load };
