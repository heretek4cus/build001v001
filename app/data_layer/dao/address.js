var db = require('../sequelize/database');

var address = db.address;
var config = db.config;
var city_state = db.city;


exports.create=function(item_obj,callback){
    
    address.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(item_id,callback){
//    address.findById(item_id,{
//        include: [{
//            model: unit,
//            as: 'unit',
//          }],  
//    })
    address.findById(item_id)
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });

}


exports.getItem=function(item_id,callback){
        address.findById(item_id)
        .then(data=>{
            callback(null,data);     
        })
        .catch(err => {
            console.log('Unable to find row(s):', err.stack);
           callback(err,null);
        });
    
}


exports.list=function(callback){
    
    address.findAll()
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });
}


exports.destroy=function(item_id,callback){
    address.destroy({
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
    address.update(item_obj,{
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


exports.check_config =function(moduleName,menuName,elementName,callback){
    config.findOne({
        where:{
            $and:{
                module_name:moduleName,
                menu_name:menuName,
                element_name:elementName
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


exports.check_city_state =function(city,state,pincode,callback){
    city_state.findOne({
        where:{
            $and:{
                name:city,
                state: state,
                pincode:pincode
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

