
'use strict';

module.exports = function (sequelize, DataTypes) {
  const address = sequelize.define('address',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true
      },
      care_of: {
        type:DataTypes.STRING,
        allowNull:true
      },
      address_type: {
        type:DataTypes.STRING,
        allowNull:false
      },
      address_line_1:{
        type:DataTypes.STRING,
        allowNull:false
      },
      address_line_2: {
        type:DataTypes.STRING,
        allowNull:true
      },
      address_line_3: {
        type:DataTypes.STRING,
        allowNull:true
      },
      landmark: {
          type:DataTypes.STRING,
          allowNull:true
      },
      city: {
        type:DataTypes.STRING,
        allowNull:false
      },
      state: {
        type:DataTypes.STRING,
        allowNull:false
      },
      country: {
        type:DataTypes.STRING,
        allowNull:false
      },
      pincode: {
        type:DataTypes.INTEGER,
        allowNull:false
      },

      valid_from: {
        type:DataTypes.DATE,
        allowNull:false
      },
      valid_until: {
        type:DataTypes.DATE,
        allowNull:false
      },
      status: {
        type:DataTypes.BOOLEAN,
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
  
  return address;

};