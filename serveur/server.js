const express = require('express')
const app = express()
const port = 3000

app.get('/', express.static(path.resolve(_dirname, '../client/dist')))

app.use('*', (req, res) => {
    res.status(404).res.sendFile(path.resolve(_dirname,'../client/dist/404.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))