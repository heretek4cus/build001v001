var db = require('../sequelize/database');

var role = db.role;

exports.create=function(item_obj,callback){
    
    role.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(item_id,callback){
//    role.findById(item_id,{
//        include: [{
//            model: unit,
//            as: 'unit',
//          }],  
//    })
    role.findById(item_id)
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });

}


// exports.getItem=function(item_id,callback){
//         role.findById(item_id)
//         .then(data=>{
//             callback(null,data);     
//         })
//         .catch(err => {
//             console.log('Unable to find row(s):', err.stack);
//            callback(err,null);
//         });
    
// }


exports.list=function(callback){
    
    role.findAll()
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });
}


exports.destroy=function(item_id,callback){
    role.destroy({
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
    role.update(item_obj,{
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

        
