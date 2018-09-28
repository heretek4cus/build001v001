
'use strict';

const Joi = require('joi');

module.exports = function (sequelize, DataTypes) {
  const person = sequelize.define('person',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },
      title: {
        type:DataTypes.STRING,
        allowNull:true
      },
      first_name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      last_name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      address_id:{
        type:DataTypes.INTEGER,
        allowNull:true
      },
      gender: {
        type:DataTypes.STRING,
        allowNull:true
      },      
      person_type: {
        type:DataTypes.STRING,
        allowNull:false
      },
      primary_email: {
        type:DataTypes.STRING,
        allowNull:false
      },
      secondary_email: {
        type:DataTypes.STRING,
        allowNull:true
      },
      primary_contact: {
        type:DataTypes.STRING,
        allowNull:true
      },
      secondary_contact: {
        type:DataTypes.STRING,
        allowNull:true
      },
      password: {
        type:DataTypes.STRING,
        allowNull:false
      },  
      remember_token: {
        type:DataTypes.STRING,
        allowNull:true
      },  
      valid_from: {
        type:DataTypes.DATE,
        allowNull:true
      },
      valid_until: {
        type:DataTypes.DATE,
        allowNull:true
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

  //property.associate = (models) => {
	//	property.hasMany(models.unit, {
	//	foreignKey: 'property_Id',
	//	as: 'unit',
  //  });
  //};  

  return person;

};