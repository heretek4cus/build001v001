
const property_DAO = require('../data_layer/dao/property')
const address_DAO = require('../data_layer/dao/address')
const person_DAO = require('../data_layer/dao/person')
const config_DAO = require('../data_layer/dao/config')

exports.create = function (req, res) {
    var property_obj = req.body;

    // Create the Property record
    property_DAO.create(property_obj, function (err, data) {
       if (err) {
          res.json({status:"400", message: "Error creating Property.", data:data});
       }
       else {
          res.json({status:"200", message: "Property created Successfully!!!", data:data});
       }
    });
  
}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        property_DAO.retrieve(req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Property information.", id:req.params.id});
            }
            else if (data !==null){
                res.json({status:"200", message: "Success", data:data});
            }
            else {
                res.json({status:"300", message: "No data found.", data:data});
            }
        });
    }
}


exports.list = function (req, res) {
    property_DAO.list(function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Property information.", data:data});
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
    property_DAO.destroy(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Property.", id:req.params.id});
        }
        else if (data == 1) {
            res.json({status:"200", message: "Success", data:data});
        }
        else {
            res.json({status:"300", message: "No data to delete.", data:id});
        }
    });
}

exports.update = function (req, res) {
    var inp_obj = req.body;
    property_DAO.retrieve(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Property information.", id:req.params.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            if (inp_obj.property_name)
                item_obj.property_name = inp_obj.property_name;
            if (inp_obj.description)
                item_obj.description= inp_obj.description;
            if (inp_obj.property_type)
                item_obj.property_type= inp_obj.property_type;
                item_obj.builder_id = inp_obj.builder_id;
            if (inp_obj.property_identity)
                item_obj.property_identity = inp_obj.property_identity;
            if (inp_obj.propertty_landmark)
                item_obj.propertty_landmark=inp_obj.property_landmark;            
            if (inp_obj.valid_from)
                item_obj.valid_from = inp_obj.valid_from;
            if (inp_obj.valid_until)
                item_obj.valid_until = inp_obj.valid_until;
            if (inp_obj.status)
                item_obj.status = inp_obj.status;
            
            property_DAO.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Property.", id:req.params.id});
                } else {
                    res.json({status:"200", message: "Property updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", data:data});
        }

    });
}