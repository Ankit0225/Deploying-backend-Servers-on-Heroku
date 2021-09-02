const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5555
const app = express()

app.use('/public' , express.static(path.join(__dirname , 'public')))

app.get('/', (req,res)=> 
  res.send('Hello from Backend')
)

app.listen(PORT,()=> {
    console.log(`Server started at http://localhost:${PORT}`);
})