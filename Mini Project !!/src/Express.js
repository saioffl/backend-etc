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

app.get('/students', (req, res) => {
    res.send(userNames)
})

app.get('/students/:id', (req, res) => {
    
    const id = Number(req.params.id)
    const user = userNames.find((user)=> user.id === id)
    console.log(user)
    res.send(user)
})

app.use(exp.json())
app.listen(3000, () => {
    console.log('Server Running @ https://localhost:3000');
})
app.use('/homeUS', (res,req) =>{
    console.log('Not Found !!')
})

