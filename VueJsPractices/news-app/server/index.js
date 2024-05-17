const { resolve } = require('path')

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())


/**
 * Serve static content from Vue
 */
const publicPath = resolve(__dirname, './../client/dist')
const staticConf = { maxAge: '1y', etag: false }
app.use(express.static(publicPath, staticConf))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
