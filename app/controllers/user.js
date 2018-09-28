
var user_DAO = require('../data_layer/dao/user');
const bcrypt = require('bcrypt');	
const jwt = require('jsonwebtoken');
const commonFunctions_DAO = require('../data_layer/dao/commonFunctions');

exports.register = function (req, res) {
    var item_obj = req.body;

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    item_obj.password = hashedPassword;

    var inp_obj = req.body;
    var item_obj = {};

    item_obj.first_name = inp_obj.first_name;
    item_obj.last_name = inp_obj.last_name;
    item_obj.person_type = inp_obj.type;
    item_obj.primary_email = inp_obj.username;
    item_obj.password = inp_obj.password;    

    user_DAO.create(item_obj, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error creating User.", data:req.body});
        }
        else {
            res.json({status:"200", message: "User created successfully!!!", data:{user: data, token:null}});
        }
    });
}

exports.login = function (req, res) {
    
    if (req.body.username) {
        user_DAO.getUser(req.body.username, function (err, data) {
            if (err) {
                res.json({status:"400", message: "Error signing in", data:req.body.username});
            }
            else if (data !==null){
                
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    const token = jwt.sign({username:data.username, id: data._id}, req.app.get('secretKey'), { expiresIn: '24h' }); 
                    user_obj = {};
                    user_obj.remember_token = token;

                    // Save the token in DB
                    user_DAO.update(user_obj, req.body.username, function (err, data) {
                    });
                    
                    //get Login Data
                    loginData = {};
                    commonFunctions_DAO.getLoginData(data.id, function(err, loginData){
                        if (err){
                            res.json({status:"400", message: "Error signing in", data:req.body.username});
                        }
                        else if (loginData !== null){
                            resData = loginData;                    
                            res.json({status:"200", message: "User Authenticated Successfully!!!", data:{firstname: data.first_name, lastname: data.last_name, user: req.body.username, token:token, loginInfo:resData}});
        
                        }

                    });

                }
                else {
                    res.json({status:"401", message: "Authentication failed. Invalid Username/Password combination!!!", data:null});
                }
            }
            else {
                res.json({status:"401", message: "Authentication failed. User not found.", data:req.body.username});
            }
        });
    }

}    


exports.loginRequired = function (req, res, next) {
    var item_obj = req.body;
    if (req.body.username) {
        next();
      } else {
        return res.status(401).json({ message: 'Unauthorized user!' });
      }
}


exports.changePassword = function (req, res) {
    var userObj = req.body;

    var hashedPassword = bcrypt.hashSync(userObj.password, 8);
    userObj.password = hashedPassword;

    user_DAO.update(userObj, userObj.username, function (err, data) {
        if (err) {
            res.json({status:"400", message: "Error updating User password.", data:req.body});
        }
        else {
            res.json({status:"200", message: "Password updated successfully!!!", data:{user: data}});
        }
    });
}
