const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', (req, res)=>{
  console.log('testing vercel')
  res.status(200).json({message: 'it works!'})
})

const userRouter = require('./routes/users')
const shopify = require('./routes/shopify-webhook')

app.use('/shopify', shopify)

app.use('/users',userRouter)

app.listen(3001)
