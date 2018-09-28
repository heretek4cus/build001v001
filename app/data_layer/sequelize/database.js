

var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'dev';
var config = require('./config.json');
var fs = require('fs');
var path = require('path');
var files_path=__dirname+"/models";


var db = {};
if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);
}

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

/* The below logic is to read all the Model files from the Models folder 	*/
/* and importing all the .js files and registring in the DB object       	*/
/* as a model and finally associating the model in the DB object.			*/ 																
	
fs
    .readdirSync(files_path)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
        var model = sequelize['import'](path.join(files_path, file));
        db[model.name] = model;
    });

	
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
