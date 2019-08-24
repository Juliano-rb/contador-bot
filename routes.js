const helloArea = require('./controllers/helloArea')
const ProtectedArea = require('./controllers/protectedArea')
const logger = require('./middlewares/logger')
const commandArgs = require('./middlewares/commandArgs')

module.exports = (bot)=> {
    // by lars graubner, exposes the parameters of the message
    bot.use(commandArgs())
    bot.use(logger())

    Main(bot)
    ProtectedArea(bot)

   
}