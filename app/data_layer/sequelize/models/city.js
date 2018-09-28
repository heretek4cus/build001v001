/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var city = sequelize.define('city', {
      id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        references: {
          model: 'unit',
          key: 'id'
        }
      },
      state: {
        type: DataTypes.STRING(45),
        allowNull: false,
        references: {
          model: 'member',
          key: 'id'
        }
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
      tableName: 'city',
      timestamps: true
    });
    return city;
  };
  