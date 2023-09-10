const bodyParser = require('body-parser');
const express=require('express')
const admin=require('./Routes/admin')
const shop=require('./Routes/shop')
const path=require('path')
const contactRoute=require('./Routes/contact-us')
const errorController=require('./Controllers/error')

const app=express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(admin)
app.use(shop)
app.use(contactRoute)
app.use(express.static(path.join(__dirname, 'public')))

app.use(errorController.error)

app.listen(3000)
