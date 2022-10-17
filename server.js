const http = require('http')
const server = http.createServer((req, res) => {
        console.log('New connection')
        res.end('Hello Rohan, How is your day going today ?')
})
const PORT =  process.env.PORT || 8080
server.listen(PORT, () => console.log('listening'))
