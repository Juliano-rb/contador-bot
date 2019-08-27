module.exports = bot => {
  bot.help(ctx => ctx.reply("Send me a sticker"));
  bot.on("sticker", ctx => ctx.reply("Gostei"));
  bot.hears("hi", ctx => ctx.reply("Hey there"));
};
