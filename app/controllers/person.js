
const person_data_access = require('../data_layer/dao/person')

exports.create = function (req, res) {

    var person_obj = req.body;
    person_data_access.create(person_obj, function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error creating Person.", data:data});
        }
        else {
          res.json({status:"200", message: "Person created Successfully!!!", data:data});
        }
    });
}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        person_data_access.retrieve(req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Person information.", data:req.params.id});
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
    person_data_access.list(function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Person information.", data:data});
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
    person_data_access.destroy(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Person.", data:req.params.id});
        }
        else if (data == 1) {
            res.json({status:"200", message: "Success", data:data});
        }
        else {
            res.json({status:"300", message: "No data to delete.", data:data});
        }
    });
}

exports.update = function (req, res) {
    var person_obj = req.body;
    person_data_access.getItem(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Person information.", id:req.params.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            if (person_obj.title)
                item_obj.title = person_obj.title;
            if (person_obj.first_name)
                item_obj.first_name = person_obj.first_name;
            if (person_obj.last_name)
                item_obj.last_name = person_obj.last_name;
            if (person_obj.address_id)
                item_obj.address_id= person_obj.address_id;
            if (person_obj.gender)
                item_obj.gender = person_obj.gender;
            if (person_obj.dob)
                item_obj.dob = person_obj.dob;
            if (person_obj.person_type)
                item_obj.person_type = person_obj.person_type;
             if (person_obj.secondary_email)
                item_obj.secondary_email = person_obj.secondary_email;
            if (person_obj.primary_contact)
                item_obj.primary_contact = person_obj.primary_contact;
            if (person_obj.secondary_contact)
                item_obj.secondary_contact = person_obj.secondary_contact;
            if (person_obj.password)
               item_obj.password = person_obj.password;               
            if (person_obj.valid_from)
                item_obj.valid_from = person_obj.valid_from;
            if (person_obj.valid_until)
                item_obj.valid_until = person_obj.valid_until;
            if (person_obj.status)
                item_obj.status = person_obj.status;
            
            person_data_access.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Person.", data:req.params.id});
                } else {
                    res.json({status:"200", message: "Person updated successfully.", data:req.params.id});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", data:data});
        }

    });
}