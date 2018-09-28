
var db = require('../sequelize/database');

var config = db.config;

exports.check_config =function(inIdentifier,inElementName,inElementValue,callback){
    config.findOne({
        where:{
            $and:{
                identifier:inIdentifier,
                element_name:inElementName,
                element_value:inElementValue
            }                  
        }        
    }).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to fetch record:', err.stack);
       callback(err,null);
    });
}
