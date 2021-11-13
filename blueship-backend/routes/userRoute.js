const express = require('express')
const router = express.Router()
const User = require('../models/usermodel') 

// sign up 
router.post('/signup', async(req, res)=> { 
    const newUser = new User({
        email : req.body.email, 
        password : req.body.password, 
        name :req.body.name, 
        isAdmin : req.body.isAdmin
    })
    try{
        const savedUser = await newUser.save()
        res.status(200).json({message : 'User Craeted ', user : savedUser })
    }
    catch(err){
        res.status(504).send(err.message)
    }
})

// sign in 
router.post('/signin', async(req, res)=> { 
    try{
        const signinUser = await User.findOne({
            email : req.body.email, 
            password : req.body.password
        })
        if (signinUser){
            res.status(200).send({
                _id : signinUser.id ,
                email : signinUser.email, 
                name : signinUser.name ,
                isAdmin : signinUser.isAdmin,
                
            })
        }
        else{
            res.status(200).send('Invalid E-mail or password')
        }
    }
    catch(error)  {
        res.status(500).send(error.message)

    }
})




router.get('/api/users', async(req, res) => { 
    try{
        const allUsers = await User.find()
        if(allUsers.length > 0 ){
            res.send(allUsers)
        }
        else{
            res.send('No Users Found')
        }
    }
    catch(err) { 
        res.send(err)
    }
})
module.exports = router