const mongoose =require('mongoose')
const express=require('express')
const dotenv=require("dotenv")
const cors=require('cors')
const app=express()
dotenv.config()


app.use(express.json())
app.use(cors({
    origin: 'https://tuner-frontend.onrender.com'
}))

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on("connected",()=>{
    console.log("data base connection successfull")
})
mongoose.connection.on("error",()=>{
    console.log("connection failed")
})


app.use(require("./Routes/auth"))
app.use(require('./Routes/uploadVideo'))
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})