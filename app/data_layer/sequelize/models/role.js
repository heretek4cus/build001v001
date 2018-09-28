
'use strict';

const Joi = require('joi');

module.exports = function (sequelize, DataTypes) {
  const role = sequelize.define('role',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },
      role_type: {
        type:DataTypes.STRING,
        allowNull:true
      },
      role_name: {
        type:DataTypes.STRING,
        allowNull:true
      },
      description: {
        type:DataTypes.STRING,
        allowNull:false
      },
      status: {
        type:DataTypes.INTEGER,
        defaultValue:1,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field:"created_at"
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field:"updated_at"
      }
    },
    {
      freezeTableName: true,
      timestamps: true
    }
    

  );

  //role.associate = (models) => {
	//	role.hasMany(models.unit, {
	//	foreignKey: 'property_Id',
	//	as: 'unit',
  //  });
  //};  

  return role;

};