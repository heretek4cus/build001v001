
'use strict';

const Joi = require('joi');

module.exports = function (sequelize, DataTypes) {
  const visitor = sequelize.define('cg_visitor',
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
      visitor_name: {
        type:DataTypes.STRING,
        allowNull:false
      },
     contact: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
     visit_date:{
         type:DataTypes.DATE,
         allowNull:false
     },
      purpose: {
        type:DataTypes.STRING,
        allowNull:false
      },
      vehicle_no:{
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

  return visitor;

};