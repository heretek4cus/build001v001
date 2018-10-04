var db = require('../sequelize/database');

var approval = db.approval;

exports.create=function(item_obj,callback){
    approval.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(unit_id,item_id,callback){
    approval.findById(item_id)
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });

}


exports.getItem=function(item_id,callback){
        approval.findById(item_id)
        .then(data=>{
            callback(null,data);     
        })
        .catch(err => {
            console.log('Unable to find row(s):', err.stack);
           callback(err,null);
        });
    
}


// exports.list=function(item_id,callback){
//     //approval.findAll()
//     approval.findAll({
//         where:{
//             id:item_id
//         }
//     })    
//     .then(data=>{
//         callback(null,data);     
//     })
//     .catch(err => {
//         console.log('Unable to find row(s):', err.stack);
//        callback(err,null);
//     });
// }


exports.destroy=function(unit_id,item_id,callback){
    approval.destroy({
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
    approval.update(item_obj,{
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

