const express = require('express')
const app = express()

app.get('/', (req, res)=>{
  console.log('testing vercel')
  res.status(200).json({message: 'it works!'})
})

app.listen(3001)
