var db = require('../sequelize/database');

var unitMember = db.cg_unit_member;

exports.create=function(item_obj,callback){
    
    unitMember.create(item_obj).
    then(data=>{
        callback(null,data);     
    })
    .catch(err => {
        console.log('Unable to create record:', err.stack);
       callback(err,null);
    });

}


exports.retrieve=function(unit_id,item_id,callback){
//    unitMember.findById(item_id,{
//        include: [{
//            model: unitMember,
//            as: 'unitMember',
//          }],  
//    })
    // unitMember.findById(item_id)
    unitMember.findAll({
        where:{
            $and:{
            id:item_id,
            unit_id: unit_id}
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


exports.getItem=function(block_id,item_id,callback){
        //unitMember.findById(item_id)
        unitMember.findAll({
            where:{
                $and:{
                id:item_id,
                unit_id: unit_id}
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


exports.list=function(unit_id,callback){
    //unitMember.findAll()
    unitMember.findAll({
        where:{
            unit_id:unit_id
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


exports.destroy=function(unit_id,item_id,callback){
    unitMember.destroy({
        where:{
            $and:{
            id:item_id,
            unit_id: unit_id}
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
    unitMember.update(item_obj,{
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

