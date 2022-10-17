const http = require('http')
const server = http.createServer((req, res) => {
        console.log('New connection')
        res.end('hello world hahahahahahahahaha')
})
const PORT =  process.env.PORT || 8080
server.listen(PORT, () => console.log('listening'))
