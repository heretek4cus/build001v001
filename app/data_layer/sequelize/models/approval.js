
'use strict';

module.exports = function (sequelize, DataTypes) {
  const approval = sequelize.define('approval',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },
      person_id: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      approval_type: {
        type:DataTypes.STRING,
        allowNull:false
      },
      requested_by: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      requested_date: {
        type:DataTypes.DATE,
        allowNull:true
      },
      approved_by: {
        type:DataTypes.INTEGER,
        allowNull:false
      },
      approved_date: {
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


  return approval;

};