const express = require('express');
const router = express.Router();
const Joi = require('joi');


const visitorController=require('../app/controllers/visitor');
const validateToken=require('../app/controllers/validateToken');

const visitorSchema = Joi.object({
  unit_id: Joi.number().required(),
  visitor_name: Joi.string().min(2).max(125).required(),
  contact:Joi.number().required(),
  visit_date: Joi.date().iso().greater('1900-01-01'),
  purpose: Joi.string().allow('').optional(),
  vehicle_no: Joi.string().allow('').optional(), 
  status: Joi.number().default(1)
});


/* Visitor */
router.post('/visitors',validateToken.validateToken, function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, visitorSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a Visitor using the
    visitorController.create(req,res);
  }

});

router.get('/visitors',validateToken.validateToken,function(req, res, next) {
  visitorController.list(req,res);
});

router.get('/visitors/:id',validateToken.validateToken, function(req, res, next) {
  visitorController.retrieve(req,res);
});

router.put('/visitors/:id',validateToken.validateToken,function(req, res, next) {
  visitorController.update(req,res);
});

router.delete('/visitors/:id',validateToken.validateToken, function(req, res, next) {
  visitorController.destroy(req,res);
});

module.exports = router;
