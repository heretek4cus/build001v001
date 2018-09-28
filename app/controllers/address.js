
const address_DAO = require('../data_layer/dao/address')

exports.create = function (req, res) {
    var item_obj = req.body;

    address_DAO.create(item_obj, function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error creating address.", data:data});
        }
        else {
          res.json({status:"200", message: "Address created Successfully!!!", data:data});
        }
    });
}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        address_DAO.retrieve(req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Address.", id:req.params.id});
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
    address_DAO.list(function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Address.", data:data});
        }
        else if (data !==null){
            res.json({status:"200", message: "Success", data:data});
        }
        else {
            var res_obj = {};
            res.json({status:"300", message: "No data found.", data:data});
        }
    });
}

exports.destroy = function (req, res) {
    address_DAO.destroy(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Address.", id:req.params.id});
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
    address_DAO.getItem(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Address.", id:req.params.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            if (inp_obj.care_of)
                item_obj.care_of = inp_obj.care_of;
            if (inp_obj.address_type)
                item_obj.address_type = inp_obj.address_type;
            if (inp_obj.address_line_1)
                item_obj.address_line_1 = inp_obj.address_line_1;
            if (inp_obj.address_line_2)
                item_obj.address_line_2 = inp_obj.address_line_2;
            if (inp_obj.address_line_3)
                item_obj.address_line_3 = inp_obj.address_line_3;
            if(inp_obj.landmark)
                item_obj.landmark=inp_obj.landmark;    
            if (inp_obj.city)
                item_obj.city = inp_obj.city;
            if (inp_obj.state)
                item_obj.state = inp_obj.state;
            if (inp_obj.country)
                item_obj.country = inp_obj.country;
            if (inp_obj.pincode)
                item_obj.pincode = inp_obj.pincode;
            if (inp_obj.valid_from)
                item_obj.valid_from = inp_obj.valid_from;
            if (inp_obj.valid_until)
                item_obj.valid_until = inp_obj.valid_until;
            if (inp_obj.status)
                item_obj.status = inp_obj.status;
            
            address_DAO.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Address.", id:req.params.id});
                } else {
                    res.json({status:"200", message: "Address updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", id:req.params.id});
        }

    });
}