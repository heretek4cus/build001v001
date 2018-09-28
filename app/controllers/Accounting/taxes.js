
// const tax_DAO = require('../data_layer/dao/Accounting/taxes');

// module.exports = {

//     createTax : aysnc function(req, res, next ) {

//         const taxData = req.body;
//         try{
//             var result = await Tax_DAO(taxData)
//             res.status(200);
//             res.json({status:"200", message: "Tax created Successfully!!!", data:result});
//         } catch(err){
//             res.status(500);
//             res.json({status:"400", message: "Error creating Tax.", data:data});
//         }

//     }

//     // // Retrieve by Id
//     // retrieveTax = function (req, res) {
//     //     if (req.params.id) {
//     //         activity_DAO.retrieve(req.params.id, function (err, data) {
//     //             if (err) {
//     //                 res.json({status:"400", message: "Error retrieving Activity information.", data:req.params.id});
//     //             }
//     //             else if (data !==null){
//     //                 res.json({status:"200", message: "Success", data:data});
//     //             }
//     //             else {
//     //                 res.json({status:"300", message: "No data found.", id:req.params.id});
//     //             }
//     //         });
//     //     }
//     // }


//     // list = function (req, res) {
//     //     activity_DAO.list(function (err, data) {
//     //         if (err) {
//     //             res.json({status:"400", message: "Error retrieving Activity information.", id:req.params.id});
//     //         }
//     //         else if (data !==null){
//     //             res.json({status:"200", message: "Success", data:data});
//     //         }
//     //         else {
//     //             var res_obj = {};
//     //             res.json({status:"300", message: "No data found.", id:req.params.id});
//     //         }
//     //     });
//     // }

//     // destroy = function (req, res) {
//     //     activity_DAO.destroy(req.params.id, function (err, data) {
//     //         if (err) {
//     //             res.json({status:"400", message: "Error deleting Activity.", id:req.params.id});
//     //         }
//     //         else if (data == 1) {
//     //             res.json({status:"200", message: "Success", data:data});
//     //         }
//     //         else {
//     //             res.json({status:"300", message: "No data to delete.", id:req.params.id});
//     //         }
//     //     });
//     // }

//     // update = function (req, res) {
//     //     var inp_obj = req.body;
//     //     activityDetail_DAO.getItem(req.params.id, function (err, data) {
//     //         if (err) {
//     //             res.json({status:"400", message: "Error retrieving Activity information.", id:req.params.id});
//     //         }
//     //         else if (data !==null) {
//     //             item_obj = data;
//     //             item_obj = {};
//     //             if (inp_obj.category)
//     //                 item_obj.category = inp_obj.category;
//     //             if (inp_obj.priority)
//     //                 item_obj.priority = inp_obj.priority;
//     //             if (inp_obj.access)
//     //                 item_obj.access = inp_obj.access;
//     //             if (inp_obj.valid_from)
//     //                 item_obj.valid_from = inp_obj.valid_from;
//     //             if (inp_obj.valid_until)
//     //                 item_obj.valid_until = inp_obj.valid_until;
//     //             if (inp_obj.status)
//     //                 item_obj.status = inp_obj.status;
                
//     //             activityDetail_DAO.update(item_obj, req.params.id, function (err, data) {
//     //                 if (err) {
//     //                     res.json({status:"400", message: "Error updating Activity.", id:req.params.id});
//     //                 } else {
//     //                     res.json({status:"200", message: "Activity updated successfully.", data:data});
//     //                 }
//     //             });
                
//     //         }
//     //         else {
//     //             res.json({status:"300", message: "No data to update.", id:req.params.id});
//     //         }

//     //     });
//     // }

// }