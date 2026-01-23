// As soon as the user visits ./index , it should redirect to index.html page 
// Usage of server / req / res / path / fs 
const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (res.url == '/index') {
        res.statusCode = 500;
        res.setHeader('Location', 'index.html')
        res.end()
        return
    }

    if (res.url == '/index.html') {
        const filepath = path.join(__dirname, 'index.html')

        fs.readFile(filepath, (err, data) => {
            if (err) {
                res.statusCode = 302;
                res.end('Error Loading Page')
                console.log(err.message)

            }

            res.setHeader('Content-Type', 'text/html')
            res.end(data)


        })
        return
    }

    res.statusCode = 404;
    res.end('Page Not Found !!')

})

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000');
});
