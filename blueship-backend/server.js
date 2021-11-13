const express = require('express')
const cors = require('cors')
const config = require('./config')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()

const productRoute = require('./routes/productRoutr')
const cardRoute = require('./routes/cardRoute')
const userRoute = require('./routes/userRoute')

dotenv.config()
const mongodbUrl = config.MONGODB_URL

app.use(cors())
app.use(express.json())

// routes
app.use('/', productRoute)
app.use('/', cardRoute)
app.use('/', userRoute)


















// db connection 
mongoose.connect(
    mongodbUrl,
    {
        useNewUrlParser : true,
        useUnifiedTopology: true  
    }, 
    ()=> console.log('db connected')
)
const port = 1333
app.listen(port, ()=> {
    console.log(`server on ${port}`)
})