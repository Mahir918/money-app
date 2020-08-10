const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const passport = require('passport')
const path = require('path');



const userRouter = require('./routers/userRoute')


const app = express()
app.use(morgan('dev'))
app.use(cors())


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(passport.initialize())
require('./passport')(passport)

app.use('/api/users/',userRouter)
app.use('/api/transactions', require('./routers/transactionRoutes'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
    })
}


app.get('/',(req,res)=>{
    res.json({
        message:'Welocome to our Application'
    })
})




const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    mongoose.connect(`mongodb+srv://${process.env.dbUsername}:${process.env.dbPassword}@cluster0-qzv1e.mongodb.net/managment-app?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
})


