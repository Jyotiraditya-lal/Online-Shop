
const express=require('express')
const productController=require('../Controllers/products')

const router=express.Router()

router.get('/',productController.getShop)

module.exports= router
