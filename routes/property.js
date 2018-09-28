const express = require('express');
const router = express.Router();
const Joi = require('joi');

const propertyController=require('../app/controllers/property');

//---------------------------------------------------------------------------------------------------------------
// Property needs to have a Address
// Property can optionally have a Contact (Person)
// Address API is invoked first followed by Property API
// If Property has a Contact (Person), APIs are invoked in this sequence:  Address -> Person -> Property 
//---------------------------------------------------------------------------------------------------------------

const propertySchema = Joi.object({
  property_name: Joi.string().required(),
  description: Joi.string().required(),
  property_type: Joi.string().min(2).max(20).required(),
  address_id: Joi.number().optional(),
  contact_id: Joi.number().optional(),
  property_identity:Joi.string().allow('').optional(),
  property_landmark:Joi.string().allow('').optional(),
  valid_from: Joi.date().iso().greater('1900-01-01'),                               // defaults to 1900-01-01
  valid_until: Joi.date().iso().greater('1900-01-01').min(Joi.ref('valid_from')),   // defaults to 9999-12-31
  status: Joi.number().default(1)
});


/* Property */
router.post('/properties', function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, propertySchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a Property using the
    propertyController.create(req,res);
  }
});

router.get('/properties', function(req, res, next) {
  propertyController.list(req,res);
});

router.get('/properties/:id', function(req, res, next) {
  propertyController.retrieve(req,res);
});

router.put('/properties/:id',function(req, res, next) {
  propertyController.update(req,res);
});

router.delete('/properties/:id', function(req, res, next) {
  propertyController.destroy(req,res);
});

module.exports = router;
