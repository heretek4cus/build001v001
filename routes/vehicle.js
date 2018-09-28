const express = require('express');
const router = express.Router();
const Joi = require('joi');

// New Microservices go here...
const vehicleController=require('../app/controllers/vehicle');
const validateToken=require('../app/controllers/validateToken');

const vehicleSchema = Joi.object({
  unit_id: Joi.number().required(),
  member_id: Joi.number().required(),
  vehicle_no: Joi.string().allow('').optional(),
  parking_lot:Joi.string().allow('').optional(),
  sticker_no: Joi.string().allow('').optional(), 
  vehicle_type: Joi.string().allow('').optional(),
  vehicle_model: Joi.string().allow('').optional(),
  comments: Joi.string().allow('').optional(),
  status: Joi.number().default(1)
});


/* Vehicle */
router.post('/vehicles',validateToken.validateToken, function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, vehicleSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a Vehicle using the
    forUnit = req.params.unit_id;
    vehicleController.create(req,res,forUnit);
  }

});

router.get('/vehicles',validateToken.validateToken,function(req, res, next) {
  vehicleController.list(req,res);
});

router.get('/vehicles/:id',validateToken.validateToken, function(req, res, next) {
  vehicleController.retrieve(req,res);
});

router.put('/vehicles/:id',validateToken.validateToken,function(req, res, next) {
  vehicleController.update(req,res);
});

router.delete('/vehicles/:id',validateToken.validateToken, function(req, res, next) {
  vehicleController.destroy(req,res);
});

module.exports = router;
