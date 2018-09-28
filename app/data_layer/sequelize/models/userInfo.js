
'use strict';

module.exports = function (sequelize, DataTypes) {
  const unitInfo = sequelize.define('cg_unit_info',
    {
      property_id: {
        type:DataTypes.INTEGER,
        allowNull:true
      },
      property_name: {
        type:DataTypes.STRING,
        allowNull:true
      },
      property_description: {
        type:DataTypes.STRING,
        allowNull:true
      },  
      property_type: {
        type:DataTypes.STRING,
        allowNull:true
      },          
      property_contact_id: {
        type:DataTypes.INTEGER,
        allowNull:true
      },
      property_address_id: {
        type:DataTypes.INTEGER,
        allowNull:true
      },
      property_status: {
        type:DataTypes.INTEGER,
        allowNull:true
      }, 
      block_id: {
        type:DataTypes.INTEGER,
        allowNull:true
      },           
      block_name: {
        type:DataTypes.STRING,
        allowNull:true
      },
      block_description: {
        type:DataTypes.STRING,
        allowNull:true
      },  
      block_contact_id: {
        type:DataTypes.INTEGER,
        allowNull:true
      },
      block_address_id: {
        type:DataTypes.INTEGER,
        allowNull:true
      },
      block_status: {
        type:DataTypes.INTEGER,
        allowNull:true
      }, 
      unit_id: {
        type:DataTypes.INTEGER,
        allowNull:true
      },           
      unit_name: {
        type:DataTypes.STRING,
        allowNull:true
      },
      unit_type: {
        type:DataTypes.STRING,
        allowNull:true
      }
    },
    {
      freezeTableName: true,
      timestamps: true
    }
    

  );


  return unitInfo;

};