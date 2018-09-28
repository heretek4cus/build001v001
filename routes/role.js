const express = require('express');
const router = express.Router();
const Joi = require('joi');


const roleController=require('../app/controllers/role');
const validateToken=require('../app/controllers/validateToken');

const roleSchema = Joi.object({
  role_type: Joi.any().valid('ADMIN','SUPPORT','SECURITY','VENDORS','STAFF','PROPERTY_ADMIN','PROPERTY_MEMBER','GUESTS','AUDITORS','MISC'),
  role_name: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(2).max(255).optional(),
  status: Joi.number().default(1)
});


/* Role */
router.post('/roles',function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, roleSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a Role using the
    roleController.create(req,res);
  }

});

router.get('/roles/',function(req, res, next) {
  roleController.list(req,res);
});

router.get('/roles/:id',function(req, res, next) {
  roleController.retrieve(req,res);
});

router.put('/roles/:id',function(req, res, next) {
  roleController.update(req,res);
});

router.delete('/roles/:id',function(req, res, next) {
  roleController.destroy(req,res);
});

module.exports = router;
