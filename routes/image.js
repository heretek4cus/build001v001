var express = require('express');
var router = express.Router();
var validate_token=require('../app/controllers/validateToken');

var image_upload = require('../app/controllers/s3_upload');

const UPLOAD_PATH = 'uploads';

var multer=require('multer');
const multerS3 = require('multer-s3');
var s3_config = require('../app/controllers/config.json');
const AWS = require('aws-sdk');
const s3Config = new AWS.S3({
    accessKeyId:s3_config.aws.AWS_ACCESS_KEY_ID,
    secretAccessKey: s3_config.aws.AWS_SECRET_ACCESS_KEY,
    Bucket: s3_config.aws.BUCKET_NAME
  });
const upload = multer({
  storage: multerS3({
    s3: s3Config,
    bucket: s3_config.aws.BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})

router.post('/any_image',validate_token.validateToken, upload.single('image'),function(req,res,next){
  res.send({
    "link":s3_config.aws.DOWNLOAD_LINK+req.file.originalname
  })
});
module.exports = router;
