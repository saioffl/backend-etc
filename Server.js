const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    console.log(request.url);
    if (!fs.existsSync('Https')) {
        fs.mkdir('Https', () => {
            console.log('File created !!')
            fs.writeFile('./Https/Universal.txt', 'Heyy Kunweee !!!', (err) => {
                if (err) {
                    console.log(err.message)
                }
                console.log('OverRided Message !')
            })
        })
    }
    else {
        console.log('Already Exists !')
    }



})

server.listen('3000', 'localhost')
