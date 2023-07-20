const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const {connectDB} = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleWare')
const port =  process.env.port || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port,()=>console.log(`Server started on port number: ${port}`))

