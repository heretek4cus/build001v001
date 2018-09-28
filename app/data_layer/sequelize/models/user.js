/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        references: {
          model: 'person',
          key: 'primary_email'
        }
      },
      
      password: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
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
    }, {
      tableName: 'user',
      timestamps: true
    });
    return users;
  };
  