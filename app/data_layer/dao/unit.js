var db = require('../sequelize/database');

var unit = db.cg_unit;

exports.create=function(item_obj,callback){
    
    unit.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(block_id,item_id,callback){
//    unit.findById(item_id,{
//        include: [{
//            model: unit,
//            as: 'unit',
//          }],  
//    })
    // unit.findById(item_id)
    unit.findAll({
        where:{
            $and:{
            id:item_id,
            block_id: block_id}
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


exports.getUnit=function(unit_id,callback){
        unit.findById(unit_id)
        .then(data=>{
            callback(null,data);     
        })
        .catch(err => {
            console.log('Unable to find row(s):', err.stack);
           callback(err,null);
        });
    
}


exports.list=function(block_id,callback){
    //unit.findAll()
    unit.findAll({
        where:{
            block_id:block_id
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


exports.destroy=function(block_id,item_id,callback){
    unit.destroy({
        where:{
            $and:{
            id:item_id,
            block_id: block_id}
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
    unit.update(item_obj,{
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

