const Main = require('./controllers/main')
const ProtectedArea = require('./controllers/protectedArea')

module.exports = (bot)=> {
    Main(bot)
    ProtectedArea(bot)
}