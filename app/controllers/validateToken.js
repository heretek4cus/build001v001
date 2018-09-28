
var jwt = require('jsonwebtoken');

// exports.validate_token=function(req,res,next){
//     // jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
//     //     if (err) {
//     //       res.json({status:"error", message: err.message, data:null});
//     //     } else{
//     //       // add user id to request
//     //       req.body.username = decoded.id;
//     //       next();
//     //     }
//     //   });

//     next();    
// }


  
exports.validateToken = function validateToken(req, res, next) {
  jwt.verify(req.headers['x-api-key'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      //req.body.userId = decoded.id;
      next();
    }
  });
  
}