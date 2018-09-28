const express = require('express');
const router = express.Router();

var fs = require('fs');
var S3FS = require('s3fs');
var s3fsImpl = new S3FS('cgdev-tek4cus-tek', {
  accessKeyId :'AKIAJDX2THB3PEQKNQ5A',
  secretAccessKey:'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'
});
s3fsImpl.create();
var multiparty = require('connect-multiparty'),
multipartyMiddleware = multiparty();
module.exports = function(router,passport)
{
  router.use(multipartyMiddleware);
  router.post('/Image_upload',function(req,res,next){
    var file = req.files.file;
    var stream = fs.createReadStream(file.path);
    return s3fsimpl.writeFile(file.originalFilename,stream).then(function(){
      fs.unlink(file.path,function(err){
        if(err)
        console.error(err);
      })
      res.redirect('/profile');
    });
  });
}
module.exports = router;
