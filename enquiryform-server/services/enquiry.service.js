const Enquiry = require('../models/enquiry');
  
 const add=(name,phone,email,message)=>{
  const enquiry = new Enquiry({
    name:name,
    phone:phone,
    email:email,
    message:message

  })
  return enquiry.save()


}


 const getEnquiries=()=>{


   return  Enquiry.find()
}
const getUser=(_id)=>{


  return  Enquiry.findById(
    _id
  )
}

const updateUser = function(_id, data){
return Enquiry.findOneAndUpdate({_id},data)
}
module.exports = {
    add,
    getEnquiries,
    getUser,
    updateUser
}