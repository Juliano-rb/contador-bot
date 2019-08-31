/* eslint-disable no-eval */
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });
const Telegraf = require("telegraf");
const Stage = require("./Stage");
const Middlewares = require("./middlewares");

const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

Middlewares.Load(bot);
Stage(bot);

if (eval(process.env.DEV)) {
    console.log("Starting in DEV mode");

    bot.launch();
}

module.exports = bot;
