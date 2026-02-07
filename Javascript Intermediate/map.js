const express = require('express');
const app = express(); // Express Init ! 

const stdArray = [
    {
        id: 1, Name: 'Sai'
    },
    {
        id: 2, Name: 'Naga'
    }
]

app.get('/stdArray/', (req, res) => {
    res.json(stdArray)
})


app.get('/stdArray/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = stdArray.find((std) => std.id === id);
    console.log(student)

    if (!student) {
        return res.status(404).send('Student Not Found')
    }

    res.json(student)

})


app.get('/stdArray', (req, res) => {
    console.log(req.query); // shows query object
    res.json(req.query);
});

app.listen(3000, () => {
    console.log('Server Running on Port 3000 : localHost');
})