const session = require('telegraf/session')
const helloArea = require('./scenes/helloArea')
const protectedArea = require('./scenes/protectedArea')

const Stage = require('telegraf/stage')

const loadStage = (bot) => {
    const stage = new Stage(
        [
            helloArea,
            protectedArea
        ],
        {
            default: 'helloArea'
        }
    )
    
    bot.use(session())
    bot.use(stage.middleware())
}


module.exports = loadStage