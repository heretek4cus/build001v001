
// 'use strict';

// module.exports = function (sequelize, DataTypes) {
//   const tax = sequelize.define('tax',
//     {
//       id: {
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//         autoIncrement:true
//       },
//       property_name: {
//         type:DataTypes.STRING,
//         allowNull:false
//       },
//       description: {
//         type:DataTypes.STRING,
//         allowNull:false
//       },
//       property_type: {
//         type:DataTypes.STRING,
//         allowNull:false
//       },
//       contact_id:{
//         type:DataTypes.INTEGER,
//         allowNull:true
//       },
//       address_id: {
//         type:DataTypes.INTEGER,
//         allowNull:true
//       },
//       builder_id: {
//         type:DataTypes.INTEGER,
//         allowNull:true
//       },
//       property_identity: {
//         type:DataTypes.STRING,
//         allowNull:true
//       },
//       property_landmark: {
//         type:DataTypes.STRING,
//         allowNull:true
//       },
//       valid_from:{
//           type:DataTypes.DATE,
//           allowNull:true
//       },
//       valid_until:{
//         type:DataTypes.DATE,
//         allowNull:true
//     },
//     lat:{
//         type:DataTypes.DECIMAL,
//         allowNull:true
//     },
//     long:{
//         type:DataTypes.DECIMAL,
//         allowNull:true
//     },
//       status: {
//         type:DataTypes.INTEGER,
//         defaultValue:1,
//       },
//       createdAt: {
//         type: DataTypes.DATE,
//         allowNull: true,
//         field:"created_at"
//       },
//       updatedAt: {
//         type: DataTypes.DATE,
//         allowNull: true,
//         field:"updated_at"
//       }
//     },
//     {
//       freezeTableName: true,
//       timestamps: true
//     }
    

//   );


//   return property;

// };