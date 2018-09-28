
const unit_DAO = require('../data_layer/dao/unit');
const block_DAO = require('../data_layer/dao/block');


exports.create = function (req, res) {
    var unit_obj = req.body;
    block_DAO.getBlock(req.params.block_id,function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error checking Block information.", data:data});
        }
        else if (data == null) {
           res.json({status:"300", message: "Block does not exist.", block_id:req.params.block_id});     
        }
        else{
            unit_obj.block_id = req.params.block_id;    
            unit_DAO.create(unit_obj, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error creating Unit.", id:null});
                }
                else {
                    res.json({status:"200", message: "Unit created Successfully!!!", data:data});
                }
            });
        }        
    });    
}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        unit_DAO.retrieve(req.params.block_id, req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Unit information.", id:data.id});
            }
            else if (data == 0) {
                res.json({status:"300", message: "No data found for Block/Unit combination.", id:data.id});
            }
            else {
                res.json({status:"200", message: "Success", data:data});
            }
        });
    }
}


exports.list = function (req, res) {
    unit_DAO.list(req.params.block_id,function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Unit information.", id:data.id});
        }
        else if (data == 0) {
            res.json({status:"300", message: "No data found for Block/Unit combination.", id:data.id});
        }
        else {
            res.json({status:"200", message: "Success", data:data});
        }
    });
}

exports.destroy = function (req, res) {
    unit_DAO.destroy(req.params.block_id,req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Unit.", id:data.id});
        }
        else if (data == 0) {
            res.json({status:"300", message: "No data found for Block/Unit combination.", id:data.id});
        }
        else {
            res.json({status:"200", message: "Success", data:data});
        }
    });
}

exports.update = function (req, res) {
    var inp_obj = req.body;
    unit_DAO.retrieve(req.params.block_id,req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Unit information.", id:data.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            
            if (inp_obj.unit_name)
                item_obj.unit_name = inp_obj.unit_name;
            if (inp_obj.description)
                item_obj.description= inp_obj.description;
            if (inp_obj.unit_type)
                item_obj.unit_type= inp_obj.unit_type;
            if (inp_obj.owner_1)
                item_obj.owner_1 = inp_obj.owner_1;
            if (inp_obj.owner_2)
                item_obj.owner_2 = inp_obj.owner_2;
            if (inp_obj.owner_3)
                item_obj.owner_3 = inp_obj.owner_3;
            if (inp_obj.floor)
                item_obj.floor= inp_obj.floor;
            if (inp_obj.area)
                item_obj.area = inp_obj.area;
            if (inp_obj.noofbedroom)
                item_obj.noofbedroom = inp_obj.noofbedroom;
            if (inp_obj.facing)
                item_obj.facing = inp_obj.facing;
            if (inp_obj.left_unit)
                item_obj.left_unit = inp_obj.left_unit;
            if (inp_obj.right_unit)
                item_obj.right_unit = inp_obj.right_unit;            
            if (inp_obj.front_unit)
                item_obj.front_unit = inp_obj.front_unit;
            if (inp_obj.status)
                item_obj.status = inp_obj.status;
            
            unit_DAO.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Unit.", id:data.id});
                } else {
                    res.json({status:"200", message: "Unit updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", id:data.id});
        }

    });
}