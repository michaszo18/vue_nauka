const express = require('express')
const app = express()

const obj = {
    hajs: 15000,
    ocupation: 'developer'
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\index.html')
})

app.listen(3000, () => {
    console.log('listening on 3000')
})