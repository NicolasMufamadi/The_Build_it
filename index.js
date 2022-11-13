const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3400

//middleware
app.use(cors())
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`)
})