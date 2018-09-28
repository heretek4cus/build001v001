const express = require('express');
const router = express.Router();
const Joi = require('joi');

// New Microservices go here...
const addressController=require('../app/controllers/address');
const validateToken = require('../app/controllers/validateToken');

const addressSchema = Joi.object({
  care_of: Joi.string().min(2).max(255).required(),
  address_type: Joi.string().max(20).required(),
  address_line_1: Joi.string().max(100).required(),
  address_line_2: Joi.string().allow('').optional(),
  address_line_3: Joi.string().allow('').optional(),
  landmark: Joi.string().allow('').optional(),
  city: Joi.string().min(2).max(100).required(),
  state: Joi.string().min(2).max(100).required(),
  country: Joi.string().min(2).max(100).required(),
  pincode: Joi.number().max(999999).required(),  
  valid_from: Joi.date().iso().greater('1900-01-01'),                               // defaults to 1900-01-01
  valid_until: Joi.date().iso().greater('1900-01-01').min(Joi.ref('valid_from')),   // defaults to 9999-12-31
  status: Joi.number().default(1)
});


/* address */
router.post('/addresses',validateToken.validateToken, function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, addressSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a address using the
    addressController.create(req,res);
  }

});

router.get('/addresses',validateToken.validateToken,function(req, res, next) {
  addressController.list(req,res);
});

router.get('/addresses/:id',validateToken.validateToken, function(req, res, next) {
  addressController.retrieve(req,res);
});

router.put('/addresses/:id',validateToken.validateToken,function(req, res, next) {
  addressController.update(req,res);
});

router.delete('/addresses/:id',validateToken.validateToken, function(req, res, next) {
  addressController.destroy(req,res);
});

module.exports = router;
