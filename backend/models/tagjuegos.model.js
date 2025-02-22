const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tagjuegos', {
    tagIdTag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tags',
        key: 'idTag'
      }
    },
    juegoIdGame: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'juegos',
        key: 'idGame'
      }
    }
  }, {
    sequelize,
    tableName: 'tagjuegos',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tagIdTag" },
          { name: "juegoIdGame" },
        ]
      },
      {
        name: "juegoIdGame",
        using: "BTREE",
        fields: [
          { name: "juegoIdGame" },
        ]
      },
    ]
  });
};
