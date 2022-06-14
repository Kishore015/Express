// importing express
const express = require('express');

// setting express
const app = express();

// Assigning a port to node application
const PORT = 3100;

// user data
const usersList= [
    {
        id:0,
        name:'Kishore Kumar',
        role:'Super-admin'
    },
    {
        id:1,
        name:'Rajesh',
        role:'Admin'
    },
    {
        id:2,
        name:'Harish',
        role:'user'
    }
];

// Express Middelware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const timeTaken = Date.now() - start;
    console.log(`${req.method} ${req.url} taken ${timeTaken} ms to complete the task`)
})

// GET
app.get('/', (req,res) => {
    res.send("<body style='background:skyblue;position:relative;min-height:100vh;'><h1 style='color:green;font-size:50px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)'>Hello world.....!</h1></body>")
})

// GET with another route
app.get('/welcome', (req, res) => {
    res.send({
        id:1,
        name:'kishore',
        message:'Hello, I am a web developer'
    })
})

// GET
app.get('/exit', (req,res) => {
    res.send('<h1>This is the exit page.......</h1>')
})


// GET total list of users
app.get('/users', (req,res) => {
    res.json(usersList)
})


// GET single user with user id
app.get('/users/:id', (req,res) => {
    const userId = Number(req.params.id);
    const user = usersList[userId];
    if(user){
        res.status(200).json(user)
        // console.log(user)
    } else{
        res.status(404).send('<h1>User not found</h1>')
        // console.log('user not found')
    }
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})