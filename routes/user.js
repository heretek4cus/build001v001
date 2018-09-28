const express = require('express');
const router = express.Router();
const Joi = require('joi');

// New Microservices go here...
const userController=require('../app/controllers/user');

// ---------------------------------------------------------------------
// New Microservices go here...
// ---------------------------------------------------------------------

const userSchema = Joi.object({
  first_name: Joi.string().min(2).max(255).required(),
  last_name: Joi.string().min(2).max(255).required(),
  type: Joi.any().valid('SOFTWARE_ADMIN','SOFTWARE_SUPPORT','PROPERTY_ADMIN','COMMITTEE_MEMBER','PROPERTY_MEMBER'),
  username: Joi.string().min(2).max(255).required(),
  password: Joi.string().min(2).max(255).required()
});


/* user */
router.post('/users/register', function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, userSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a user using the
    userController.register(req,res);
  }

});

router.post('/users/login', function(req, res, next) {
  userController.login(req,res);
});

router.post('/users/changepassword', function(req, res, next) {
  userController.changePassword(req,res);
});

router.post('users/loginrequired', function(req, res, next) {
  userController.loginRequired(req,res);
});

module.exports = router;
