const path=require('path')
const rootDir=require('../Util/path')
const Product=require('../models/product')

exports.getAddProduct=(req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'Views','add-product.html'))
}

exports.postAddProduct=(req,res,next)=>{
    const product= new  Product(req.body.title,req.body.amount)
    product.save()
    res.redirect('/')

}

exports.getShop=(req,res,next)=>{
    Product.fetchAll((products)=>{res.sendFile(path.join(rootDir, 'Views', 'shop.html'))})
}
