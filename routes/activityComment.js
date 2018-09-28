const express = require('express');
const router = express.Router();
const Joi = require('joi');

// New Microservices go here...
const activityCommentController=require('../app/controllers/activityComment');
const validateToken = require('../app/controllers/validateToken');

const activityCommentSchema = Joi.object({
  activity_id: Joi.number().required(),
  member_id: Joi.number().required(),
  comment: Joi.string().min(2).max(255).required(),
  status: Joi.number().default(1)
});


/* Activity_comment */
router.post('/activitycomments', validateToken.validateToken,function(req, res, next) {
  // validates and returns the user object on success
  const ret = Joi.validate(req.body, activityCommentSchema, {
    // return an error if body has an unrecognised property
    allowUnknown: false,
    // return all errors a payload contains, not just the first one Joi finds
    abortEarly: false
  });

  if (ret.error) {
    res.status(400).end(ret.error.toString());
  } else {
    // create a Activity using the
    activityCommentController.create(req,res);
  }

});

router.get('/activitycomments',validateToken.validateToken,function(req, res, next) {
  activityCommentController.list(req,res);
});

router.get('/activitycomments/:id', validateToken.validateToken,function(req, res, next) {
  activityCommentController.retrieve(req,res);
});

router.put('/activitycomments/:id',validateToken.validateToken,function(req, res, next) {
  activityCommentController.update(req,res);
});

router.delete('/activitycomments/:id',validateToken.validateToken, function(req, res, next) {
  activityCommentController.destroy(req,res);
});

module.exports = router;
