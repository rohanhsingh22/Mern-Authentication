import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.listen(3000, ()=>{
    console.log('Server is running at port 3000')
})

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoBD')
}).catch((err)=>{
    console.log(err)
})