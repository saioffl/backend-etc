const fs = require('fs');
fs.mkdir('./File', (err) => {
    if (err)
        console.log(err.message);
    else
        console.log('File Created');
})




