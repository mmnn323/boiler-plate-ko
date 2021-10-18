const express = require('express')  // express 모듈 가져옴
const app = express()
const port = 5001
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ryu:1234@boilerplate.59vtb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected')).catch(err =>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})