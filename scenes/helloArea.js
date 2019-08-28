const Scene = require('telegraf/scenes/base')

const helloArea = new Scene('helloArea')
helloArea.enter((ctx) => ctx.reply('Hi'))
helloArea.command('admin', (ctx) => ctx.scene.enter('protectedArea'))
helloArea.help((ctx) => ctx.reply('Send me a sticker'))
helloArea.on('sticker', (ctx) => ctx.reply('Gostei'))
helloArea.on('message', (ctx) => ctx.reply('E aê meu chapa'))
module.exports = helloArea;