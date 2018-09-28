require('dotenv').config();
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
var s3_config=require('./config.json');

const s3Config = new AWS.S3({
    accessKeyId:s3_config.aws.AWS_ACCESS_KEY_ID,
    secretAccessKey: s3_config.aws.AWS_SECRET_ACCESS_KEY,
    Bucket: 'cgdev-tek4cus'
  });

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

// this is just to test locally if multer is working fine.
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'src/api/media/profiles')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
})

const multerS3Config = multerS3({
    s3: s3Config,
    bucket:'cgdev-tek4cus',
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        console.log(file)
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
});

const upload = multer({
    storage: multerS3Config,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5 // we are allowing only 5 MB files
    }
})

exports.profileImage = upload; 