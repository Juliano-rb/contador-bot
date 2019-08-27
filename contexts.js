const helloArea = require("./controllers/helloArea");
const ProtectedArea = require("./controllers/protectedArea");
const logger = require("./middlewares/logger");
const commandArgs = require("./middlewares/commandArgs");

module.exports = bot => {
  bot.use(commandArgs());
  bot.use(logger());

  helloArea(bot);
  ProtectedArea(bot);
};
