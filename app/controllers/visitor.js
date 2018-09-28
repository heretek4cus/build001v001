
const visitor_DAO = require('../data_layer/dao/visitor');
const unit_DAO = require('../data_layer/dao/unit');

exports.create = function (req, res) {
    var visitor_obj = req.body;

    unit_DAO.getUnit(visitor_obj.unit_id, function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error checking Unit information.", data:data});
        }
        else if (data == null) {
           res.json({status:"300", message: "Unit does not exist.", unit_id:visitor_obj.unit_id});     
        }
        else {
            visitor_DAO.create(visitor_obj, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error creating visitor.", data:data});
            }
            else {
                res.json({status:"200", message: "visitor created Successfully!!!", data:data});
            }
          }); 
        } 
    });

}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        visitor_DAO.retrieve(req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Visitor information.", id:req.params.id});
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
    visitor_DAO.list(function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Visitor information.", id:data});
        }
        else if (data !==null){
            res.json({status:"200", message: "Success", data:data});
        }
        else {
            var res_obj = {};
            res.json({status:"300", message: "No data found.", id:data});
        }
    });
}

exports.destroy = function (req, res) {
    visitor_DAO.destroy(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Visitor.", id:req.params.id});
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
    visitor_DAO.retrieve(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Visitor information.", id:req.params.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            if (inp_obj.unit_id)
                item_obj.unit_id = inp_obj.unit_id;
            if (inp_obj.visitor_name)
                item_obj.visitor_name= inp_obj.visitor_name;
            if (inp_obj.contact)
                item_obj.contact = inp_obj.contact;
            if (inp_obj.visit_date)
                item_obj.visit_date = inp_obj.visit_date;
            if (inp_obj.purpose)
                item_obj.purpose = inp_obj.purpose;
            if (inp_obj.vehicle_no)
                item_obj.vehicle_no = inp_obj.vehicle_no;
            if (inp_obj.status)
                item_obj.status = inp_obj.status;
            
            visitor_DAO.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Person.", id:req.params.id});
                } else {
                    res.json({status:"200", message: "Person updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", id:data.id});
        }

    });
}