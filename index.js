const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const express = require("express");

const expressApp = express();
const bot = require("./bot");

const PORT = process.env.PORT || 3000;
const { APP_URL } = process.env;
const DEV = eval(process.env.DEV);

if (!DEV) {
  console.log("Setting Webhook...");

  const TOKEN = bot.telegram.token;
  bot.telegram.setWebhook(`${APP_URL}/${TOKEN}`);
  expressApp.use(bot.webhookCallback(`/${TOKEN}`));
}

expressApp.get("/", (req, res) => {
  res.send("There's nothing here :)");
});

expressApp.listen(PORT, () => {
  console.log("Server is listening");
});
