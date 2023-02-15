
require('dotenv').config();
const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser')
const user=require('./routes/userRouter');
const  DbConnect=require('./configuration/DbConnect')
const app=express();
app.use(express.json())

app.use(cookieParser())
app.use(cors());
app.use('/user',user);
DbConnect();
/*const Url=process.env.Db_Local

mongoose.connect(Url,{
    useNewUrlParser:true,
    useUniFiedTopology:true
},err=>{
    if(err) throw err;
    console.log('connect to Mongo Db')
})*/

app.get('/',(req,res)=>{
    res.status(200).send({msg:'hello'});

})


const port=3000;

app.listen(port,(err)=>{
    err ? console.log(err) : console.log('server is running in port ',port);
});
