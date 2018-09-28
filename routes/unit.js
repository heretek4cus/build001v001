const express = require('express');
const router = express.Router();
const Joi = require('joi');

//---------------------------------------------------------------------------------------------------------------
// Unit needs to have a Block 
//---------------------------------------------------------------------------------------------------------------


const unitController=require('../app/controllers/unit');
const validateToken=require('../app/controllers/validateToken');

const unitSchema = Joi.object({
  block_id: Joi.number().required(),  
  unit_name: Joi.string().max(50).required(),
  description: Joi.string().optional(),
  unit_type: Joi.string().min(2).max(50).required(),
  owner_1: Joi.number().optional(),
  owner_2: Joi.number().optional(),
  owner_3: Joi.number().optional(),
  floor:Joi.string().max(50).required(),
  area:Joi.string().max(50).required(),
  noofbedroom: Joi.string().max(50).required(),
  facing: Joi.string().max(50).required(),
  left_unit: Joi.string().max(50).required(),
  right_unit: Joi.string().max(50).required(),
  front_unit: Joi.string().max(50).required(),
  status: Joi.number().default(1)
});


/* Unit */
router.post('/blocks/:block_id/units/', validateToken.validateToken,function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, unitSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a Unit using the
    unitController.create(req,res);
  }

});

router.get('/blocks/:block_id/units/',validateToken.validateToken,function(req, res, next) {
  unitController.list(req,res);
});

router.get('/blocks/:block_id/units/:id',validateToken.validateToken, function(req, res, next) {
  unitController.retrieve(req,res);
});

router.put('/blocks/:block_id/units/:id',validateToken.validateToken,function(req, res, next) {
  unitController.update(req,res);
});

router.delete('/blocks/:block_id/units/:id',validateToken.validateToken, function(req, res, next) {
  unitController.destroy(req,res);
});

module.exports = router;
