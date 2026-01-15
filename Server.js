// create a folder -> file.html
// write a message in file.html
// display it in localhost:3000/home

// Loopholes :
//  check whether it already exists or not , if not then create a folder or else display : already exists !! 



const http = require('http')
const fs = require('fs')

if (!fs.existsSync('File', (err) => {
    if (err) {
        console.log(err.message)
    }
    fs.mkdir('File/file.txt', { recursive: true }, 'Hey Kunwee !!', (err) => {
        if (err) {
            console.log(err.message)
        }

    })
}))

server.listen('3000', 'localhost')
