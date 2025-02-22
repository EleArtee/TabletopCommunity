const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.informeGame = require("./informeJuego.model.js")(sequelize, Sequelize);
db.informeList = require("./informeLista.model.js")(sequelize, Sequelize);
db.informeReview = require("./informeReview.model.js")(sequelize, Sequelize);
db.informeUser = require("./informeUsuario.model.js")(sequelize, Sequelize);
db.juegos = require("./juego.model.js")(sequelize, Sequelize);
db.lista = require("./lista.model.js")(sequelize, Sequelize);
db.perfil = require("./perfil.model.js")(sequelize, Sequelize);
db.review = require("./review.model.js")(sequelize, Sequelize);
db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.admin = require("./admin.model.js")(sequelize, Sequelize);
db.tag = require("./tag.model.js")(sequelize, Sequelize);
db.tagjuegos = require("./tagjuegos.model.js")(sequelize, Sequelize);

db.usuario.hasOne(db.perfil, { foreignKey: 'idUser'});
db.lista.belongsTo(db.usuario, { foreignKey: 'idUser' });
db.lista.belongsToMany(db.juegos, { through: 'ListaJuegos'});
db.juegos.belongsToMany(db.lista, { through: 'ListaJuegos'});
db.review.belongsTo(db.usuario, { foreignKey: 'idUser' });
db.review.belongsTo(db.juegos, { foreignKey: 'idGame' });
db.informeGame.belongsTo(db.admin, { foreignKey: 'idAdmin'});
db.informeList.belongsTo(db.admin, { foreignKey: 'idAdmin'});
db.informeReview.belongsTo(db.admin, { foreignKey: 'idAdmin'});
db.informeUser.belongsTo(db.admin, { foreignKey: 'idAdmin'});
db.informeGame.belongsTo(db.juegos, { foreignKey: 'idGame'});
db.informeList.belongsTo(db.lista, { foreignKey: 'idUList'});
db.informeReview.belongsTo(db.review, { foreignKey: 'idReview'});
db.informeUser.belongsTo(db.usuario, { foreignKey: 'idUser'});
db.tag.belongsToMany(db.juegos,{ through: 'TagJuegos'});

module.exports = db;