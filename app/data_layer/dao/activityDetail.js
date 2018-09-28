var db = require('../sequelize/database');

var activityDetail = db.cg_activity_detail;

exports.create=function(item_obj,callback){
    
    activityDetail.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(item_id,callback){
//    activityDetail.findById(item_id,{
//        include: [{
//            model: unit,
//            as: 'unit',
//          }],  
//    })
    activityDetail.findById(item_id)
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });

}


exports.getItem=function(item_id,callback){
        activityDetail.findById(item_id)
        .then(data=>{
            callback(null,data);     
        })
        .catch(err => {
            console.log('Unable to find row(s):', err.stack);
           callback(err,null);
        });
    
}


exports.list=function(callback){
    
    activityDetail.findAll()
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });
}


exports.destroy=function(item_id,callback){
    activityDetail.destroy({
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
    activityDetail.update(item_obj,{
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

