var db = require('../sequelize/database');

var activityComment = db.cg_activity_comment;

exports.create=function(item_obj,callback){
    
    activityComment.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(item_id,callback){
    activityComment.findById(item_id)
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });

}


// exports.getItem=function(item_id,callback){
//         activityComment.findById(item_id)
//         .then(data=>{
//             callback(null,data);     
//         })
//         .catch(err => {
//             console.log('Unable to find row(s):', err.stack);
//            callback(err,null);
//         });
    
// }


exports.list=function(callback){
    
    activityComment.findAll()
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });
}


exports.destroy=function(item_id,callback){
    activityComment.destroy({
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
    activityComment.update(item_obj,{
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

