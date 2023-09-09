const path=require('path')
const express=require('express')
const rootDir=require('../Util/path')

const router=express.Router()

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'Views', 'contact-us.html'))
})

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'Views', 'success.html'))
})


module.exports=router