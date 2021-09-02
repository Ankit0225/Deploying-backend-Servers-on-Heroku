const express = require('express')
const path = require('path')

const app = express()

app.use('/public' , express.static(path.join(__dirname , 'public')))

app.get('/', (req,res)=> 
  res.send('Hello from Backend')
)

app.listen('4567',()=> {
    console.log('Server started at http://localhost:4567');
})