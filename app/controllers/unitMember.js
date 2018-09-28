
const unitMember_DAO = require('../data_layer/dao/unitMember');
const unit_DAO = require('../data_layer/dao/unit');
const commonFunctions_DAO = require('../data_layer/dao/commonFunctions');

exports.create = function (req, res) {
    var unitMember_obj = req.body;
    unit_DAO.getUnit(req.params.unit_id,function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error checking unit information.", data:data});
        }
        else if (data == null) {
           res.json({status:"300", message: "unit does not exist.", unit_id:unitMember_obj.unit_id});     
        }
        else{
            // get the required info for creating Unit Member
            commonFunctions_DAO.getInfoFromUnit(req.params.unit_id, function(err, data){
                if (err) {
                    res.json({status:"400", message: "Error retrieving Unit Info.", unit_id:req.params.unit_id});
                }
                else if (data == null) {
                    res.json({status:"300", message: "Unit Info does not exist.", unit_id:req.params.unit_id});     
                }
                else{
                    unitMember_obj.property_id = data[0].property_id;
                    unitMember_obj.unit_id = data[0].unit_id;
                    unitMember_obj.block_name = data[0].block_name;

                    unitMember_DAO.create(unitMember_obj, function (err, data) {
                        if (err) {
                            res.json({status:"400", message: "Error creating Unit Member.", unit_id:req.params.unit_id});
                        }
                        else {
                            res.json({status:"200", message: "Unit Member created Successfully!!!", data:data});
                        }
                    });
        
                }

            });

        }        
    });    
}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        unitMember_DAO.retrieve(req.params.unit_id, req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving unitMember information.", id:data.id});
            }
            else if (data == 0) {
                res.json({status:"300", message: "No data found for unit/unitMember combination.", id:data.id});
            }
            else {
                res.json({status:"200", message: "Success", data:data});
            }
        });
    }
}


exports.list = function (req, res) {
    unitMember_DAO.list(req.params.unit_id,function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving unitMember information.", id:data.id});
        }
        else if (data == 0) {
            res.json({status:"300", message: "No data found for unit/unitMember combination.", id:data.id});
        }
        else {
            res.json({status:"200", message: "Success", data:data});
        }
    });
}

exports.destroy = function (req, res) {
    unitMember_DAO.destroy(req.params.unit_id,req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting unitMember.", id:data.id});
        }
        else if (data == 0) {
            res.json({status:"300", message: "No data found for unit/unitMember combination.", id:data.id});
        }
        else {
            res.json({status:"200", message: "Success", data:data});
        }
    });
}

exports.update = function (req, res) {
    var inp_obj = req.body;
    unitMember_DAO.getItem(req.params.unit_id,req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving unitMember information.", id:data.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            
            if (inp_obj.unitMember_name)
                item_obj.unitMember_name = inp_obj.unitMember_name;
            if (inp_obj.description)
                item_obj.description= inp_obj.description;
            if (inp_obj.unitMember_type)
                item_obj.unitMember_type= inp_obj.unitMember_type;
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
            if (inp_obj.left_unitMember)
                item_obj.left_unitMember = inp_obj.left_unitMember;
            if (inp_obj.right_unitMember)
                item_obj.right_unitMember = inp_obj.right_unitMember;            
            if (inp_obj.front_unitMember)
                item_obj.front_unitMember = inp_obj.front_unitMember;
            if (inp_obj.status)
                item_obj.status = inp_obj.status;
            
            unitMember_DAO.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating unitMember.", id:data.id});
                } else {
                    res.json({status:"200", message: "unitMember updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", id:data.id});
        }

    });
}