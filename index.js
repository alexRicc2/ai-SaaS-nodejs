const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.json());

// app.use(express.json())

app.post('/', (req, res)=>{
  console.log('testing vercel')
  console.log('bodyy', req.body)
  res.status(200).json({message: 'it works!'})
})



const userRouter = require('./routes/users')
const shopify = require('./routes/shopify-webhook')

app.use('/shopify', shopify)

app.use('/users',userRouter)

app.listen(3001)
