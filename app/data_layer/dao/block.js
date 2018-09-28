var db = require('../sequelize/database');

var block = db.cg_block;

exports.create=function(item_obj,callback){
    
    block.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(property_id,item_id,callback){
//    block.findById(item_id,{
//        include: [{
//            model: unit,
//            as: 'unit',
//          }],  
//    })
    //block.findById(item_id)
    block.findAll({
        where:{
            $and:{
            id:item_id,
            property_id: property_id}
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


 exports.getBlock=function(item_id,callback){
         block.findById(item_id)
         .then(data=>{
             callback(null,data);     
         })
         .catch(err => {
             console.log('Unable to find row(s):', err.stack);
            callback(err,null);
         });
    
 }


exports.list=function(property_id, callback){
    block.findAll({
        where:{
            property_id:property_id
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


exports.destroy=function(property_id,item_id,callback){
    block.destroy({
        where:{
            $and:{
            id:item_id,
            property_id: property_id}
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
    block.update(item_obj,{
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

