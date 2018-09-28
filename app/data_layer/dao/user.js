var db = require('../sequelize/database');

var user = db.person;

exports.create=function(item_obj,callback){
    
    user.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to register the User:', err.stack);
       callback(err,null);
    });

}

exports.update=function(item_obj,username,callback){
    user.update(item_obj,{
        where:{
            primary_email:username
        }
    }).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to update record:', err.stack);
       callback(err,null);
    });

}

exports.getUser=function(username,callback){
    user.findOne({
        where:{
            primary_email:username
        }
    })
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });

}

