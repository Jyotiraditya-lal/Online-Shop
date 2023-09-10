const fs=require('fs')
const path=require('path')
const rootDir=require('../Util/path')

const p = path.join(rootDir, 'data', 'products.json');

const getProduct=(callback)=>{
    fs.readFile(p,(err,data)=>{
        if(err){
            return callback([])
        }
       callback(JSON.parse(data))
    })
}

module.exports= class Product {
    constructor(title,amount){
        this.title=title;
        this.amount=amount
    }

    save() {
        getProduct(product =>{
            product.push({ title: this.title, amount: this.amount });
            fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log(err);
        });
        })
    }
    

    static fetchAll(callback){
        getProduct(callback)
    }
}
