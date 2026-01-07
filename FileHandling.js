// fs.writeFile(path, data, callback)

const fs = require('fs');
if (!fs.existsSync('./File')) {
    fs.mkdir('./File', (err) => {
        if (err)
            console.log(err.message);
        else {
            console.log('File Created');
            fs.writeFile('./file/fs.txt', 'Hoiiiii', (err) => {
                if (err) {
                    console.log(err.message)
                }

                else {
                    console.log('File Written Successfully');
                }

            })

        }
    })
}
else {
    console.log("Folder Exists")
}


