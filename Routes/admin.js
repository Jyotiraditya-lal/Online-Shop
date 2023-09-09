const path=require('path')
const rootDir=require('../Util/path')
const express=require('express')

const router=express.Router()

router.get('/add-product',(req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'Views','add-product.html'))
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')

})

module.exports = router 