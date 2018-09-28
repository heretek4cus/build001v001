var db = require('../sequelize/database');

var person = db.person;
var config = db.config;
var role = db.role;


exports.create=function(item_obj,callback){
    
    person.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(item_id,callback){
//    person.findById(item_id,{
//        include: [{
//            model: unit,
//            as: 'unit',
//          }],  
//    })
    person.findById(item_id)
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });

}


exports.getItem=function(item_id,callback){
        person.findById(item_id)
        .then(data=>{
            callback(null,data);     
        })
        .catch(err => {
            console.log('Unable to find row(s):', err.stack);
           callback(err,null);
        });
    
}


exports.list=function(callback){
    
    person.findAll()
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });
}


exports.destroy=function(item_id,callback){
    person.destroy({
        where:{
            id:item_id
        }
    }).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to delete record:', err.stack);
       callback(err,null);
    });
}


exports.update=function(item_obj,item_id,callback){
    person.update(item_obj,{
        where:{
            id:item_id
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


exports.check_config =function(elementName,elementValue,callback){
    config.findOne({
        where:{
            $and:{
                
                element_name:elementName,
                element_value:elementValue

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


exports.check_role =function(roleType,roleName,callback){
    city_state.findOne({
        where:{
            $and:{
                role_type: roleType,
                role_name: roleName
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