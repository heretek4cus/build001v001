var db = require('../sequelize/database');

var visitor = db.cg_visitor;

exports.create=function(item_obj,callback){
    visitor.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(item_id,callback){
    visitor.findById(item_id)
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });

}


// exports.getVisitor=function(item_id,callback){
//         visitor.findById(item_id)
//         .then(data=>{
//             callback(null,data);     
//         })
//         .catch(err => {
//             console.log('Unable to find row(s):', err.stack);
//            callback(err,null);
//         });
    
// }


exports.list=function(callback){
    visitor.findAll()
    .then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to find row(s):', err.stack);
       callback(err,null);
    });
}


exports.destroy=function(item_id,callback){
    visitor.destroy({
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
    visitor.update(item_obj,{
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

