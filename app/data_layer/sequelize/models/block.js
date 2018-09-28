
'use strict';

const Joi = require('joi');

module.exports = function (sequelize, DataTypes) {
  const block= sequelize.define('cg_block',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },
      property_id: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      
      block_name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      description: {
        type:DataTypes.STRING,
        allowNull:false
      },
      block_landmark: {
        type:DataTypes.STRING,
        allowNull:true
      },
      contact_id:{
        type:DataTypes.INTEGER,
        allowNull:true
      },
      address_id: {
        type:DataTypes.INTEGER,
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

  return block;

};