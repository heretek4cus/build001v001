
const vehicle_DAO = require('../data_layer/dao/vehicle');
const unit_DAO = require('../data_layer/dao/unit');

exports.create = function (req, res) {
    var vehicle_obj = req.body;

    unit_DAO.getUnit(vehicle_obj.unit_id, function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error checking Unit information.", data:data});
        }
        else if (data == null) {
           res.json({status:"300", message: "Unit does not exist.", unit_id:vehicle_obj.unit_id});     
        }
        else {
          vehicle_DAO.create(vehicle_obj, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error creating Vehicle.", data:data});
            }
            else {
                res.json({status:"200", message: "Vehicle created Successfully!!!", data:data});
            }
          }); 
        } 
    });
}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        vehicle_DAO.retrieve(req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Vehicle information.", id:req.params.id});
            }
            else if (data !==null){
                res.json({status:"200", message: "Success", data:data});
            }
            else {
                res.json({status:"300", message: "No data found.", id:req.params.id});
            }
        });
    }
}


exports.list = function (req, res) {
    vehicle_DAO.list(function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Vehicle information.", id:req.params.id});
        }
        else if (data !==null){
            res.json({status:"200", message: "Success", data:data});
        }
        else {
            var res_obj = {};
            res.json({status:"300", message: "No data found.", id:req.params.id});
        }
    });
}

exports.destroy = function (req, res) {
    vehicle_DAO.destroy(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Vehicle.", id:req.params.id});
        }
        else if (data == 1) {
            res.json({status:"200", message: "Success", data:data});
        }
        else {
            res.json({status:"300", message: "No data to delete.", id:req.params.id});
        }
    });
}

exports.update = function (req, res) {
    var inp_obj = req.body;
    vehicle_DAO.getItem(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Vehicle information.", id:req.params.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            if (inp_obj.vehicle_no)
                item_obj.vehicle_no = inp_obj.vehicle_no;
            if (inp_obj.parking_lot)
                item_obj.parking_lot = inp_obj.parking_lot;
            if (inp_obj.sticker_no)
                item_obj.sticker_no = inp_obj.sticker_no;
            if (inp_obj.vehicle_type)
                item_obj.vehicle_type = inp_obj.vehicle_type;
            if (inp_obj.visit_date)
                item_obj.visit_date = inp_obj.visit_date;
            if (inp_obj.status)
                item_obj.status = inp_obj.status;
            
            vehicle_DAO.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Vehicle.", id:req.params.id});
                } else {
                    res.json({status:"200", message: "Vehicle updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", id:req.params.id});
        }

    });
}