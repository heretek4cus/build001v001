
'use strict';

const Joi = require('joi');

module.exports = function (sequelize, DataTypes) {
  const unit = sequelize.define('cg_unit',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },
      block_id: {
        type:DataTypes.STRING,
        allowNull:true
      },
      unit_name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      description: {
        type:DataTypes.STRING,
        allowNull:true
      },
      unit_type: {
        type:DataTypes.STRING,
        allowNull:false
      },
      owner_1:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      owner_2: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      owner_3: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      
      floor: {
        type:DataTypes.STRING,
        allowNull:false
      },
      
      area: {
        type:DataTypes.STRING,
        allowNull:false
      },
      
      noofbedroom: {
        type:DataTypes.STRING,
        allowNull:false
      },
      facing: {
        type:DataTypes.STRING,
        allowNull:false
      },
      left_unit: {
        type:DataTypes.STRING,
        allowNull:false
      },
      right_unit: {
        type:DataTypes.STRING,
        allowNull:false
      },
      front_unit: {
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

  //property.associate = (models) => {
	//	property.hasMany(models.unit, {
	//	foreignKey: 'property_Id',
	//	as: 'unit',
  //  });
  //};  

  return unit;

};