import http from 'http'

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.end('HELLO !')
})

server.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
})

