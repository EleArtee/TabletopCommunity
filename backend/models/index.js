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


module.exports = db;