
const role_data_access = require('../data_layer/dao/role')
const bcrypt = require('bcrypt');	
const jwt = require('jsonwebtoken');

exports.create = function (req, res) {
    var item_obj = req.body;

    role_data_access.create(item_obj, function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error creating Role.", id:data.id});
        }
        else {
          res.json({status:"200", message: "Role created Successfully!!!", data:data});
        }
    });
}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        role_data_access.retrieve(req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Role information.", id:data.id});
            }
            else if (data !==null){
                res.json({status:"200", message: "Success", data:data});
            }
            else {
                res.json({status:"300", message: "No data found.", id:data.id});
            }
        });
    }
}


exports.list = function (req, res) {
    role_data_access.list(function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Role information.", id:data.id});
        }
        else if (data !==null){
            res.json({status:"200", message: "Success", data:data});
        }
        else {
            var res_obj = {};
            res.json({status:"300", message: "No data found.", id:data.id});
        }
    });
}

exports.destroy = function (req, res) {
    role_data_access.destroy(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Role.", id:data.id});
        }
        else if (data == 1) {
            res.json({status:"200", message: "Success", data:data});
        }
        else {
            res.json({status:"300", message: "No data to delete.", id:data.id});
        }
    });
}

exports.update = function (req, res) {
    var inp_obj = req.body;
    role_data_access.retrieve(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Role information.", id:data.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            // if (inp_obj.role_type)
            //     item_obj.role_type = inp_obj.role_type;
            if (inp_obj.role_name)
                item_obj.role_name = inp_obj.role_name;
            if (inp_obj.description)
                item_obj.description = inp_obj.description;
            if (inp_obj.status)
                item_obj.status = inp_obj.status;
            
            role_data_access.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Role.", id:data.id});
                } else {
                    res.json({status:"200", message: "Role updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", id:data.id});
        }

    });
}