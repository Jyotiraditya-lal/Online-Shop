const path=require('path')
const rootDir=require('../Util/path')


exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'Views', 'contact-us.html'))
}

exports.postContact = (req,res,next) => {
    res.sendFile(path.join(rootDir, 'Views', 'success.html'))
}
