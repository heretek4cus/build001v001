
const activity_DAO = require('../data_layer/dao/activity');
const unit_DAO = require('../data_layer/dao/unit');
const activityDetail_DAO = require('../data_layer/dao/activityDetail');

exports.create = function (req, res) {
    var activity_obj = req.body;

    // config_DAO.check_config('ADDRESS', 'ADDRESS TYPE', function (err, data) {
    //     if (err) {
    //        res.json({status:"400", message: "Error validating the Config data.", data:data});
    //     }
    //     else if (data ==null){
    //         res.json({status:"300", message: "Invalid Address Type.", data:data});
    //     }
    //   }
    // );

    unit_DAO.getUnit(activity_obj.unit_id, function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error checking Unit information.", data:data});
        }
        else if (data == null) {
           res.json({status:"300", message: "Unit does not exist.", unit_id:activity_obj.unit_id});     
        }
        else {
            activity_DAO.create(activity_obj, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error creating Activity.", data:data});
            }
            else {

                // Populate the Activity Detail fields
                activity_detail_obj = {};
                activity_detail_obj.activity_id = data.id;
                activity_detail_obj.category = activity_obj.category;
                activity_detail_obj.priority = activity_obj.priority;
                activity_detail_obj.access = activity_obj.access;
                activity_detail_obj.like_count = activity_obj.like_count;
                activity_detail_obj.replies_count = activity_obj.replies_count;
                activity_detail_obj.valid_from = activity_obj.valid_from;
                activity_detail_obj.valid_until = activity_obj.valid_until;
                activity_detail_obj.status = 1;

                // create the Person record
                activityDetail_DAO.create(activity_detail_obj, function (err, data) {
                    if (err) {
                        res.json({status:"400", message: "Error creating Activity data.", data:data});
                    }
                    else {
                        res.json({status:"200", message: "Activity created Successfully!!!", data:data});
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
        activity_DAO.retrieve(req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Activity information.", data:req.params.id});
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
    activity_DAO.list(function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Activity information.", id:req.params.id});
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
    activity_DAO.destroy(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Activity.", id:req.params.id});
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
    activityDetail_DAO.getItem(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Activity information.", id:req.params.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            if (inp_obj.category)
                item_obj.category = inp_obj.category;
            if (inp_obj.priority)
                item_obj.priority = inp_obj.priority;
            if (inp_obj.access)
                item_obj.access = inp_obj.access;
            if (inp_obj.valid_from)
                item_obj.valid_from = inp_obj.valid_from;
            if (inp_obj.valid_until)
                item_obj.valid_until = inp_obj.valid_until;
            if (inp_obj.status)
                item_obj.status = inp_obj.status;
            
            activityDetail_DAO.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Activity.", id:req.params.id});
                } else {
                    res.json({status:"200", message: "Activity updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", id:req.params.id});
        }

    });
}