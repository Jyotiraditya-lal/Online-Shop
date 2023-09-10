const path=require('path')
const rootDir=require('../Util/path')

exports.getAddProduct=(req,res,next)=>{
    
    res.sendFile(path.join(rootDir,'Views','add-product.html'))
}

exports.postAddProduct=(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')

}

exports.getShop=(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'Views', 'shop.html'))
}
