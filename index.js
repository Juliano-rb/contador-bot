const http = require('http')
const bot = require('./bot/bot')
bot()
const port = (process.env.PORT || 5000)

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application/json'})
    res.write(JSON.stringify({name:'contador-bot', ver: '0.0.1'}))
    res.end();
})

server.listen(port);