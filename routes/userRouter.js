const router=require('express').Router()

const userContrl=require('../controlles/userControls');

router.post('/addUser',userContrl.AddUser);
router.get('/getUsers',userContrl.getUser);
router.get('/getId/:id',userContrl.getUserById)
router.delete('/delete/:id',userContrl.deletUser)

module.exports=router