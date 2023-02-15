const users=require('../models/userModel');
const bcrypt=require('bcrypt');

const userCtrl={
    getUser:async(req,res)=>{
        try {
            const user=await users.find()
            res.json(user)
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
            
        }
    },
    AddUser:async(req,res)=>{
        const {name,email,password}=req.body;

        const user=await users.findOne({email});
        if(user) return res.status(400).json({msg:' email exists'});
        if(password.length<6) return res.status(400).json({msg:' password is at 6 caracters long'});

        const passwordHas=await bcrypt.hash(password,10);

        const newUser =new users({
            name,email,password:passwordHas
        })
        newUser.save();
        return res.status(200).json({result:newUser});
      

    },
    getUserById:async(req,res)=>{
        try {
            const id=req.params.id
            const user= await users.findById(id)
            if(!user) return res.status(400).json({msg:'User does not exist'});
            res.json(user)
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },

    deletUser:async(req,res)=>{
        try {
            const id=req.params.id
            const user=await users.findByIdAndDelete(id);
            if(!user) return res.status(400).json({msg:'User does not exist'});
            return res.status(200).json({msg:'User deleted'});
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    }



}

module.exports=userCtrl