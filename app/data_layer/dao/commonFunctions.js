
var db = require('../sequelize/database');

var unitInfo = db.cg_unit_info;

exports.getInfoFromUnit = function(unit_id,callback){
    
    var query="select * from cg_unit_info where unit_id="+ unit_id + ";"
    db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT})
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Error: ', err.stack);
       callback(err,null);
    });

}

exports.getLoginData = function(member_id,callback){
    
    var query="select * from cg_login_data where member_id = "+ member_id + ";"
    db.sequelize.query(query, { type: db.sequelize.QueryTypes.SELECT})
    .then(loginData=>{
        callback(null,loginData);     
    })
    .catch(err => {
        console.log('Error: ', err.stack);
       callback(err,null);
    });

}