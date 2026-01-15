const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server is Running !!')
    console.log(req.url)
    console.log(req.method)

    req.headers('content-type' , 'plain/text');


})

server.listen(3000, 'localhost', () => {
    console.log('Server is Listening !!')
})
