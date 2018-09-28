
'use strict';

module.exports = function (sequelize, DataTypes) {
  const activitydetail = sequelize.define('cg_activity_detail',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },

      activity_id:{
        type:DataTypes.INTEGER,
        allowNull:false
      },

      category:{
        type:DataTypes.STRING,
        allowNull:true
      },
      
      priority:{
        type:DataTypes.STRING,
        allowNull:true
      },
      
      access:{
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

      like_count: {
        type:DataTypes.INTEGER,
        defaultValue:0,
      },

      replies_count: {
        type:DataTypes.INTEGER,
        defaultValue:0,
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

  return activitydetail;

};