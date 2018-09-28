// var db = require('../sequelize/database');

// var tax = db.tax;

// exports.create=function(item_obj){
    
//     return new Promise(function(resolve,reject){

//         setTimeout(function(){
//             resolve(item_obj);
//         }
//     }

//     tax.create(item_obj).
//     then(data=>{
//         callback(null,data);     
//     })
//     .catch(err => {
//         console.log('Unable to create record:', err.stack);
//        callback(err,null);
//     });

// }


// exports.retrieve=function(item_id,callback){
// //    tax.findById(item_id,{
// //        include: [{
// //            model: unit,
// //            as: 'unit',
// //          }],  
// //    })
//     tax.findById(item_id)
//     .then(data=>{
//         callback(null,data);     
//     })
//     .catch(err => {
//         console.log('Unable to find row(s):', err.stack);
//        callback(err,null);
//     });

// }


//  exports.gettax=function(item_id,callback){
//          tax.findById(item_id)
//          .then(data=>{
//              callback(null,data);     
//          })
//          .catch(err => {
//              console.log('Unable to find row(s):', err.stack);
//             callback(err,null);
//          });
    
//  }


// exports.list=function(callback){
    
//     tax.findAll()
//     .then(data=>{
//         callback(null,data);     
//     })
//     .catch(err => {
//         console.log('Unable to find row(s):', err.stack);
//        callback(err,null);
//     });
// }


// exports.destroy=function(item_id,callback){
//     tax.destroy({
//         where:{
//             id:item_id
//         }
//     }).
//     then(data=>{
//         callback(null,data);     
//     })
//     .catch(err => {
//         console.log('Unable to delete record:', err.stack);
//        callback(err,null);
//     });
// }


// exports.update=function(item_obj,item_id,callback){
//     tax.update(item_obj,{
//         where:{
//             id:item_id
//         }
//     }).
//     then(data=>{
//         callback(null,data);     
//     })
//     .catch(err => {
//         console.log('Unable to update record:', err.stack);
//        callback(err,null);
//     });

// }

