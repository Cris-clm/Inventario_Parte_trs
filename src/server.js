const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()
 
// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const chat= []

app.use('/', express.static(__dirname + '/public'))
app.post('/agregarChat',(req, res)=>{
  let body=req.body
  chat.push(body)
  res.json({mensaje:'se inserto chat correctamente'})
})

app.get('/listarDatos',(req, res)=>{
  res.json({datos:chat})
})


app.get('/', (req, res)=>{
res.json( {mensaje:'Bienvenido a tu servidor'} )
})
 
// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})
 
// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
})


app . listen ( 3000 , ( ) => {
    console.log ( 'servidor corriendo desde puerto 3000' )
} )

