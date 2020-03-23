const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.resolve(__dirname, '../client/dist')))

app.use('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname,'../client/dist/404.html'))
})

app.listen(port, () => console.log(`You can go to http://localhost:${port}`))