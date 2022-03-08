const express = require("express")
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

const userModel = require("../models/user")
// const userModel = require("../client/models/user")

const app = express()
const PORT = 3002

const MONGODB_URI = 'mongodb+srv://Admin:doc1234@cluster0.f1v2c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())


// Step 2
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.post("/adduser", async (req,res) => {

    const userAddress = req.body.address
    const userEmail = req.body.email
    const userPhno = req.body.phno

    const newUser = new userModel({
        address:userAddress,
        email: userEmail,
        phno: userPhno
    })
    await newUser.save()
    res.send("Inserted")
    // console.log("Inserted data")
})
app.get("/read", async (req,res) => {
    userModel.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
    // res.send("Inerted")
})

app.listen(PORT, ()=>{
    console.log(`Connected to ${PORT}`)
})