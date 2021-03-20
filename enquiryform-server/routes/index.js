var express = require('express');
var router = express.Router();
var enquiryService = require('../services/enquiry.service')

const Enquiry = require('../models/enquiry');
const { getMaxListeners } = require('../models/enquiry');
/* GET home page. */
router.get('/', function(req, res, next) {
//   const enquiry = new Enquiry({
//     name:"anu",
//     phone:7890987654,
// email:"nan@gmail.com",
//     message:"helooo"

//   })
//   enquiry.save()
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res) {
 
enquiryService.add(req.body.name,req.body.phone,req.body.email,req.body.message)
.then(enquiry=>{
  res.send({
    message:"message sent sucessfully"
  })
}) 
});
router.get('/history', function(req, res, next) {
enquiryService.getEnquiries()
.then(enquiry=>{
res.send(enquiry)
})
  
  
});
router.get('/history/:id', function(req, res) {
  
  enquiryService.getUser(req.params.id)
  .then(enquiry=>{
  res.send(enquiry)
  })
    
    
  });
  router.patch('/history/:id' , function(req, res) {
    enquiryService.updateUser(req.params.id, req.body)
    .then(enquiry=>{
      res.send({message:"updated sucessfully"})
      })
  })

module.exports = router;
