const express = require('express');
const app = express(); // Express Init ! 
const json = express.json
app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = stdArray.find((std) => std.id === id);
    console.log(student)

    if(!student){
        res.status(404).send('Student Not Found')
    }
    res.json(student)

    
})

const stdArray = [
    {
        id: 1, Name: 'Sai'
    },
    {
        id: 2, Name: 'Naga'
    }
]



app.listen(3000, () => {
    console.log('Server Running on Port 3000 : localHost');
})