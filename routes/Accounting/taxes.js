// const express = require('express');
// const router = express.Router();
// const Joi = require('joi');

// //---------------------------------------------------------------------------------------------------------------
// // tax  
// //---------------------------------------------------------------------------------------------------------------


// const taxController=require('../app/controllers/Accounting/taxes');
// const validateToken=require('../app/controllers/validateToken');

// const taxSchema = Joi.object({
//   tax_name: Joi.string().max(20).required(),
//   tax_description: Joi.string().max(100).optional(),
//   tax_type: Joi.string().max(1).required(),
//   tax_percent: Joi.number().precision(5).optional(),
//   tax_rate: Joi.number().precision(5).optional(),
//   tax_status: Joi.number().default(1)
// });


// /* tax */

// router.post('/taxes/', validateToken.validateToken, async (req,res,next) => {

//     // validates and returns the user object on success
//     const ret = Joi.validate(req.body, taxSchema, {
//       // return an error if body has an unrecognised property
//       allowUnknown: false,
//       // return all errors a payload contains, not just the first one Joi finds
//       abortEarly: false
//     });
  
//     if (ret.error) {
//       res.status(400).end(ret.error.toString());
//     } else {
//       // create a tax using the
//       return taxController.createTax(req,res,next);
//     }
  

// });




// router.get('/taxes/',validateToken.validateToken,function(req, res, next) {
//   taxController.list(req,res);
// });

// router.get('taxes/:id',validateToken.validateToken, function(req, res, next) {
//   taxController.retrieve(req,res);
// });

// router.put('/taxes/:id',validateToken.validateToken,function(req, res, next) {
//   taxController.update(req,res);
// });

// router.delete('/taxes/:id',validateToken.validateToken, function(req, res, next) {
//   taxController.destroy(req,res);
// });

// module.exports = router;
