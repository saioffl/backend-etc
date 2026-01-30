const exp = require('express')
const app = exp();


const userNames = [
    {id:1 , stdName:'Sai'},
    {id:2 , stdName:'Naga'},
    {id:3 , stdName:'Bubu'}
] 
app.get('/' , (req,res) =>{
    console.log('Entered World !')
    res.sendFile('/index.html' , {root:__dirname}) ;
})

app.get('/home', (req, res) => {
    console.log('Home Page !!')
    res.sendFile('/home.html', { root: __dirname })
})



app.use(exp.json())

app.listen(3000, () => {
    console.log('Server Running @ https://localhost:3000');
})

app.use('/homeUS', (res,req) =>{
    console.log('Not Found !!')
})

