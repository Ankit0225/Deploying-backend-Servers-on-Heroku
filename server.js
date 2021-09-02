const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5555
const app = express()

app.use('/public' , express.static(path.join(__dirname , 'public')))

app.get('/', (req,res)=> 
  res.send(`Hello from Backend \n
  Add /public to know more about project`)
)

app.listen(PORT,()=> {
    console.log(`Server started at http://localhost:${PORT}`);
})