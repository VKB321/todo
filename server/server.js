const express = require('express');
require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

mongoose.connect('mongodb+srv://NetFlixClone:NetFlixClone123@test.setebr1.mongodb.net/TodoApp?retryWrites=true&w=majority',()=>{
    app.listen(port, ()=>{
        console.log(`server is running on ${port}`)
    })
})

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : false}))

const registerController = require('./model/register')

app.post('/',(req,res)=>{
    registerController.find({username:req.body.username}).then((userExist)=>{
        if(userExist.length){
            res.status(403).send("userExist")
        }else if(req.body.password === req.body.cpassword){
            bcrypt.genSalt(10).then((Salthash)=>{
                bcrypt.hash(req.body.password, Salthash).then((passwordhash)=>{
                    registerController.create({username:req.body.username, password:passwordhash}).then(()=>{
                        res.status(200).send('successfully created')
                    }).catch((err)=>{
                        res.status(500).send(err.message)
                    })
                })
            })
        }else{
            res.send('please enter same password')
        }
    })
})

app.post('/login',(req, res)=> {
    let { username, password}=req.body

    if (!username || !password) {
        return res.status(400).send("Please Fill Your Login Details")
    }

    registerController.findOne({username:username}).then((exist)=>{
    
        if (exist) {
            bcrypt.compare(password,exist.password).then((check)=> {
                if (check){
                    const token = jwt.sign(exist.username , process.env.SECRET_KEY)
                    res.status(200).send(token)
                }else {
                    return res.status(400).send("Invalid User Credentials")
                }
            })
        }else {
            return res.status(500).send("User Does Not Exist")
        }
    })
})

const todolist = require('./Routes')
app.use('/todorouter', todolist)