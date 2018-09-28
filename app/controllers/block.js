
const block_DAO = require('../data_layer/dao/block')
const config_DAO = require('../data_layer/dao/config')
const property_DAO = require('../data_layer/dao/property')

exports.create = function (req, res) {
    var block_obj = req.body;
        property_DAO.getProperty(req.params.property_id, function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error checking Property information.", data:data});
        }
        else if (data == null) {
           res.json({status:"300", message: "Property does not exist.", property_id:req.params.property_id});     
        }
        else {
           // Create the Block record
           block_obj.property_id = req.params.property_id;
           block_DAO.create(block_obj, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error creating Block.", data:data});
            }
            else {
                res.json({status:"200", message: "Block created Successfully!!!", data:data});
            }
           });

        }
        
    });

}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        block_DAO.retrieve(req.params.property_id, req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Block information.", id:req.params.id});
            }
            // else if (err || data == null || data.id == undefined) {
            else if (data == 0) {
                    res.json({status:"300", message: "No data found for Property/Block combination.", id:req.params.id});
            }
            else {
                res.json({status:"200", message: "Success", data:data});
            }

        });
    }
}


exports.list = function (req, res) {
   
    block_DAO.list(req.params.property_id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Block information.", id:req.params.id,});
        }
        else if (data == 0) {
            res.json({status:"300", message: "No data found for Property/Block combination.", id:req.params.id});
        }
        else {
            res.json({status:"200", message: "Success", data:data});
        }
    });
}

exports.destroy = function (req, res) {
    block_DAO.destroy(req.params.property_id, req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Block.", id:req.params.id});
        }
        else if (data == 0) {
            res.json({status:"300", message: "No data found for Property/Block combination..", id:req.params.id});
        }
        else {
            res.json({status:"200", message: "Success", data:data});
        }
    });
}

exports.update = function (req, res) {
    var inp_obj = req.body;
    block_DAO.retrieve(req.params.property_id, req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Block information.", id:req.params.id});
        }
        else if (data !==null) {
            block_obj = data;
            block_obj = {};
            if (inp_obj.block_name)
                block_obj.block_name = inp_obj.block_name;
            if (inp_obj.description)
                block_obj.description = inp_obj.description;
            if (inp_obj.block_landmark)
                block_obj.block_landmark = inp_obj.block_landmark;
            if (inp_obj.status)
                block_obj.status = inp_obj.status;
            
            block_DAO.update(block_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Block.", id:req.params.id});
                } else {
                    res.json({status:"200", message: "Block updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data found for Property/Block combination.", id:req.params.id});
        }

    });
}