const exp = require('express');

const app = exp()
app.listen(3000, () => {
    console.log('Server running on port 3000');
})
app.get('/' , (req,res) =>{
    res.sendFile('index.html' , {root:__dirname});
})


app.