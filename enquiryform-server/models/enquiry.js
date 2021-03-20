const  mongoose = require('mongoose')

const Enquiry = mongoose.model('Enquiry',{
    name:String,
    phone:Number,
email:String,
    message:String
})
module.exports = Enquiry