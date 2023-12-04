#!/usr/bin/node

const fs = require('fs'); fs.writeFile("/tmp/evil.js.result", "its result of file test.js"); 
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})