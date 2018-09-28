const express = require('express');
const router = express.Router();
const Joi = require('joi');

//---------------------------------------------------------------------------------------------------------------
// Person is a standalone Generic API.
// Person is linked to Address API which is another standalone Generic API. 
// Person can also be referred as Contact, Member, Vendor, Staff etc.
//---------------------------------------------------------------------------------------------------------------

const personController=require('../app/controllers/person');
const validateToken=require('../app/controllers/validateToken');

const personSchema = Joi.object({
  title: Joi.string().allow('').optional(),
  first_name: Joi.string().min(2).max(255).required(),
  last_name: Joi.string().min(2).max(255).required(),
  address_id: Joi.number().optional(),
  gender: Joi.string().allow('').optional(),
  dob:Joi.date().iso().allow('0001-01-01').optional(),
  person_type: Joi.any().valid('SOFTWARE_ADMIN','PROPERTY_CONTACT','PROPERTY_ADMIN','COMMITTEE_MEMBER','PROPERTY_MEMBER'),
  role: Joi.string().max(255).required(),
  primary_email: Joi.string().email().lowercase().required(),
  secondary_email: Joi.string().allow('').optional(),
  primary_contact: Joi.string().min(2).max(255).required(),
  secondary_contact: Joi.number().allow('').optional(),
  password: Joi.string().allow('').min(6).alphanum().optional(),
  valid_from: Joi.date().iso().greater('1900-01-01'),                               // defaults to 1900-01-01
  valid_until: Joi.date().iso().greater('1900-01-01').min(Joi.ref('valid_from')),   // defaults to 9999-12-31
  status: Joi.number().default(1)
});

// // we use a reference to the password key on confirmPassword
// // to always ensure that password and confirmPassword are exactly the same
// const schema2 = Joi.object({
//   password: Joi.string().min(7).required().strict(),
//   confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
// });


/* Person */
router.post('/persons',validateToken.validateToken, function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, personSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a Person using the
    personController.create(req,res);
  }

});

router.get('/persons',validateToken.validateToken,function(req, res, next) {
  personController.list(req,res);
});

router.get('/persons/:id',validateToken.validateToken, function(req, res, next) {
  personController.retrieve(req,res);
});

router.put('/persons/:id',validateToken.validateToken,function(req, res, next) {
  personController.update(req,res);
});

router.delete('/persons/:id',validateToken.validateToken, function(req, res, next) {
  personController.destroy(req,res);
});

module.exports = router;
