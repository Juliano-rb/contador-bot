const Main = require('./controllers/main')
const ProtectedArea = require('./controllers/protectedArea')
const commandArgs = require('./middlewares/commandArgs')

module.exports = (bot)=> {
    // by lars graubner, exposes the parameters of the message
    bot.use(commandArgs())

    bot.hears('hi', (ctx) => ctx.reply('Hey there'))

    Main(bot)
    ProtectedArea(bot)

   
}