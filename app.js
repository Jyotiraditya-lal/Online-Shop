const bodyParser = require('body-parser');
const express=require('express')
const admin=require('./Routes/admin')
const shop=require('./Routes/shop')
const path=require('path')
const contactRoute=require('./Routes/contact-us')

const app=express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(admin)
app.use(shop)
app.use(contactRoute)
app.use(express.static(path.join(__dirname, 'public')))

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'Views', 'Error.html'))
})

app.listen(3000)
