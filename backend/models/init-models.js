var DataTypes = require("sequelize").DataTypes;
var _tagjuegos = require("./tagjuegos.model");

function initModels(sequelize) {
  var tagjuegos = _tagjuegos(sequelize, DataTypes);

  juegos.belongsToMany(tags, { as: 'tagIdTag_tags', through: tagjuegos, foreignKey: "juegoIdGame", otherKey: "tagIdTag" });
  tags.belongsToMany(juegos, { as: 'juegoIdGame_juegos', through: tagjuegos, foreignKey: "tagIdTag", otherKey: "juegoIdGame" });
  tagjuegos.belongsTo(juegos, { as: "juegoIdGame_juego", foreignKey: "juegoIdGame"});
  juegos.hasMany(tagjuegos, { as: "tagjuegos", foreignKey: "juegoIdGame"});
  tagjuegos.belongsTo(tags, { as: "tagIdTag_tag", foreignKey: "tagIdTag"});
  tags.hasMany(tagjuegos, { as: "tagjuegos", foreignKey: "tagIdTag"});

  return {
    tagjuegos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
