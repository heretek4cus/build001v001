
'use strict';

const Joi = require('joi');

module.exports = function (sequelize, DataTypes) {
  const vehicle = sequelize.define('cg_vehicle',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },
      unit_id: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      member_id: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      vehicle_no:{
        type:DataTypes.STRING,
        allowNull:true
      },
      
      parking_lot:{
        type:DataTypes.STRING,
        allowNull:true
      },
      
      sticker_no:{
        type:DataTypes.STRING,
        allowNull:true
      },
      
      vehicle_type:{
        type:DataTypes.STRING,
        allowNull:true
      },
      vehicle_model:{
          type:DataTypes.STRING,
          allowNull:false
      },
      comments:{
          type:DataTypes.STRING,
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

  return vehicle;

};