const express = require('express');
const router = express.Router();
const Joi = require('joi');

//---------------------------------------------------------------------------------------------------------------
// Block needs to have a Contact (Person)
// Block can optionally have a Address
// Person API is invoked first followed by Block API
// If Block has a Address, APIs are invoked in this sequence:  Address -> Person -> Block 
//---------------------------------------------------------------------------------------------------------------

const blockController=require('../app/controllers/block');
const validateToken = require('../app/controllers/validateToken');

const blockSchema = Joi.object({
  property_id: Joi.number().required(),
  block_name: Joi.string().required(),
  description: Joi.string().optional(),
  block_landmark: Joi.string().allow('').optional(),
  address_id: Joi.number().optional(),
  contact_id: Joi.number().optional(),
  status: Joi.number().default(1)
});


/* block */
router.post('/properties/:property_id/blocks/',validateToken.validateToken, function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, blockSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a Unit using the
    
    blockController.create(req,res);
  }

});

router.get('/properties/:property_id/blocks/',validateToken.validateToken,function(req, res, next) {
  blockController.list(req,res);
});

router.get('/properties/:property_id/blocks/:id',validateToken.validateToken, function(req, res, next) {
  blockController.retrieve(req,res);
});

router.put('/properties/:property_id/blocks/:id',validateToken.validateToken,function(req, res, next) {
  blockController.update(req,res);
});

router.delete('/properties/:property_id/blocks/:id',validateToken.validateToken, function(req, res, next) {
  blockController.destroy(req,res);
});

module.exports = router;
