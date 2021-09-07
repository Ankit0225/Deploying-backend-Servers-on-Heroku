const express = require('express')

const {db, Tasks} = require('./db')
const path = require('path')

const PORT = process.env.PORT || 5555
const app = express()

app.use('/public' , express.static(path.join(__dirname , 'public')))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=> 
  res.send(`Hello from Backend \n
  Add /public to know more about project`)
)
app.get('/tasks', async (req,res) => {
  res.send(await Tasks.findAll())
})


app.post('/tasks', async(req,res) => {
  res.send(await Tasks.create(req.body))
})

db.sync({alter: true})
.then(() => {
  app.listen(PORT,()=> {
      console.log(`Server started at http://localhost:${PORT}`);
  })
})