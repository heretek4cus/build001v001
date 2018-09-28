
'use strict';

module.exports = function (sequelize, DataTypes) {
  const unitMember = sequelize.define('cg_unit_member',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },
      property_id: {
        type:DataTypes.STRING,
        allowNull:false
      },
      unit_id: {
        type:DataTypes.STRING,
        allowNull:false
      },
      member_id: {
        type:DataTypes.STRING,
        allowNull:false
      },
      block_name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      date_of_joining: {
        type:DataTypes.DATE,
        allowNull:true
      },
      date_of_leaving: {
        type:DataTypes.DATE,
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


  return unitMember;

};