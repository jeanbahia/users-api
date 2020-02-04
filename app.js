const express = require('express')
const app = express()

app.use('/users', require('./src/routes'))

app.listen(3000, () => console.log('The server is running...'))