
'use strict';

module.exports = function (sequelize, DataTypes) {
  const activitycomment = sequelize.define('cg_activity_comment',
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
      
      member_id:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      
      comment:{
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

  return activitycomment;

};