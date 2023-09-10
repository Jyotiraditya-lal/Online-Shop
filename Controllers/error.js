const path=require('path')
const rootDir=require('../Util/path')

exports.error=(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'Views', 'Error.html'))
}
