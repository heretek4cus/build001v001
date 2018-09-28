const express = require('express');
const router = express.Router();
const Joi = require('joi');

//---------------------------------------------------------------------------------------------------------------
// UnitMember needs to have a Person record
// Before invoking UnitMember API a Person API is invoked and a Person shall be created. 
//---------------------------------------------------------------------------------------------------------------

const unitMemberController=require('../app/controllers/unitMember');
const validateToken=require('../app/controllers/validateToken');

const unitMemberSchema = Joi.object({
  member_id: Joi.number().required(),  
  date_of_joining: Joi.date().iso().greater('1900-01-01'),                                    // defaults to 1900-01-01
  date_of_leaving: Joi.date().iso().greater('1900-01-01').min(Joi.ref('date_of_joining')),    // defaults to 9999-12-31
  status: Joi.number().default(1)
});


/* Unit */
router.post('/units/:unit_id/members/', validateToken.validateToken,function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, unitMemberSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a Unit using the
    unitMemberController.create(req,res);
  }

});

router.get('/units/:unit_id/members/',validateToken.validateToken,function(req, res, next) {
  unitMemberController.list(req,res);
});

router.get('/units/:unit_id/members/:id',validateToken.validateToken, function(req, res, next) {
  unitMemberController.retrieve(req,res);
});

router.put('/units/:unit_id/members/:id',validateToken.validateToken,function(req, res, next) {
  unitMemberController.update(req,res);
});

router.delete('/units/:unit_id/members/:id',validateToken.validateToken, function(req, res, next) {
  unitMemberController.destroy(req,res);
});

module.exports = router;
