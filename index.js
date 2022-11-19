const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

//middleware
app.use(cors())
app.use(express.json())

//routers
const userRoutes = require('./routes/userRoutes')
app.use('/user/', userRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server running on https://localhost:${process.env.PORT}`)
})