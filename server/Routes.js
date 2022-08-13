
const express = require("express")
const TodoController = require('./model/todoModel')
const jwt = require("jsonwebtoken")
const router = express.Router()

router.get('/get',(req , res)=>{
    
    try{
        
        const auth_id = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        console.log(auth_id)
        TodoController.findOne({userId:auth_id}).then((Data)=>{
            res.status(200).send(Data.todolist)

        }).catch((err)=>{
            res.status(200).send([])
        })
    }catch(err){
        console.log("Get err")
        res.status(500).send(err.message)
    }
})

router.post('/addtodo', async (req, res) => {
        try {
            const auth_id = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
            console.log("hello", auth_id)
            TodoController.find({ userId: auth_id}).then((userData) => {
                console.log("hello1", auth_id)
                if (userData.length) {
                    console.log("hello2", auth_id)
                    TodoController.updateMany({ userId: auth_id }, { $push: { todolist: req.body } }).then(() => {
                        console.log("hello3", auth_id)
                        res.status(200).send('/get')
                    }).catch((err) => {
                        res.status(500).send(err)
                    })
                }else{
                    
                    TodoController.create({userId: auth_id,todolist:req.body}).then(()=>{
                        console.log('Done 1')
                        res.status(200).send('Done')
                    }).catch((err)=>{
                        res.send(500).send(err)
                    })
                }
            })
    
        } catch(err) {
            res.status(500).send('err')
        }
    })






module.exports = router;





