const express = require('express') ;
const app = express(); // Express Init ! 

app.get('/' , (req,res) =>{
    res.sendFile('/index.html', {root:__dirname})
})

app.listen(3000 , () => {
    console.log('Server Running on Port 3000 : localHost');
})