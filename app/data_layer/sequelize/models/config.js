/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var config = sequelize.define('config', {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      module_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        references: {
          model: 'unit',
          key: 'id'
        }
      },
      menu_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        references: {
          model: 'member',
          key: 'id'
        }
      },
      element_name: {
        type: DataTypes.STRING(45),
        allowNull: true,

      },
      element_value: {
        type: DataTypes.INTEGER(10),
        allowNull: true
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
      tableName: 'config',
      timestamps: true
    });
    return config;
  };
  