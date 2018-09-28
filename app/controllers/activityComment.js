
const activityComment_DAO = require('../data_layer/dao/activityComment');
const activity_DAO = require('../data_layer/dao/activity');

exports.create = function (req, res) {
    var activitycomment_obj = req.body;

    activity_DAO.getActivity(activitycomment_obj.activity_id, function (err, data) {
        if (err) {
           res.json({status:"400", message: "Error checking Activity information.", data:data});
        }
        else if (data == null) {
           res.json({status:"300", message: "Activity does not exist.", activity_id:activitycomment_obj.activity_id});     
        }
        else {
            activityComment_DAO.create(activitycomment_obj, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error creating Vehicle.", data:data});
            }
            else {
                res.json({status:"200", message: "Activity Comment created Successfully!!!", data:data});
            }
          }); 
        } 
    });

}

// Retrieve by Id
exports.retrieve = function (req, res) {
    if (req.params.id) {
        activityComment_DAO.retrieve(req.params.id, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error retrieving Activity Comment information.", id:req.params.id});
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
    activityComment_DAO.list(function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Activity Comment information.", id:req.params.id});
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
    activityComment_DAO.destroy(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error deleting Activity Comment.", id:req.params.id});
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
    activityComment_DAO.getItem(req.params.id, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error retrieving Activity Comment information.", id:req.params.id});
        }
        else if (data !==null) {
            item_obj = data;
            item_obj = {};
            if (inp_obj.status)
                item_obj.status = inp_obj.status;
            
            activityComment_DAO.update(item_obj, req.params.id, function (err, data) {
                if (err) {
                    res.json({status:"400", message: "Error updating Activity Comment.", id:req.params.id});
                } else {
                    res.json({status:"200", message: "Activity Comment updated successfully.", data:data});
                }
            });
               
        }
        else {
            res.json({status:"300", message: "No data to update.", id:req.params.id});
        }

    });
}