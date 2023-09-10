const path=require('path')
const express=require('express')
const rootDir=require('../Util/path')
const contactController=require('../Controllers/contact')
const router=express.Router()

router.get('/contact-us',contactController.getContact)

router.post('/success',contactController.postContact)


module.exports=router
