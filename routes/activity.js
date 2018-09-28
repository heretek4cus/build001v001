const express = require('express');
const router = express.Router();
const Joi = require('joi');

// New Microservices go here...
const activityController=require('../app/controllers/activity');
const validateToken = require('../app/controllers/validateToken');

const activitySchema = Joi.object({
  unit_id: Joi.number().required(),
  title: Joi.string().min(2).max(255).required(),
  description: Joi.string().required(),
  type:Joi.any().valid('D','N','G','I','P','C'), //D=Discussion, N=Notice, G=Groups, I=Images, C=Complaint
  access: Joi.any().valid('M','O','G'), // M=All Member, O=All Owners, G=All Groups
  category: Joi.string().allow('').optional(),
  priority: Joi.string().allow('').optional(),
  valid_from: Joi.date().iso().greater('1900-01-01'),                               // defaults to 1900-01-01
  valid_until: Joi.date().iso().greater('1900-01-01').min(Joi.ref('valid_from')),   // defaults to 9999-12-31
  member_id: Joi.number().required(),
  like_count: Joi.number().optional(),
  replies_count: Joi.number().optional(),
  status: Joi.number().default(1)
});


/* Activity */
router.post('/activities',validateToken.validateToken, function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, activitySchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
       // create a Activity using the
    activityController.create(req,res);
  }

});

router.get('/activities',validateToken.validateToken,function(req, res, next) {
  activityController.list(req,res);
});

router.get('/activities/:id',validateToken.validateToken, function(req, res, next) {
  activityController.retrieve(req,res);
});

router.put('/activities/:id',validateToken.validateToken,function(req, res, next) {
  activityController.update(req,res);
});

router.delete('/activities/:id',validateToken.validateToken, function(req, res, next) {
  activityController.destroy(req,res);
});

module.exports = router;
