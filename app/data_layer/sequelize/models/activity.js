
'use strict';

module.exports = function (sequelize, DataTypes) {
  const activity = sequelize.define('cg_activity',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },

      unit_id:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      
      member_id:{
        type:DataTypes.INTEGER,
        allowNull:false
      },

      title:{
        type:DataTypes.STRING,
        allowNull:false
      },

      description:{
        type:DataTypes.STRING,
        allowNull:false
      },

      type:{
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

  return activity;

};