module.exports = (sequelize, Sequelize) => {
    const InformeLista = sequelize.define("informe de lista", {
        idReport: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cuerpo: {
            type: Sequelize.TEXT,
            allowNull: false,
        }
    });
    return InformeLista;
}

module.exports = (sequelize, Sequelize) => {
    const InformeReview = sequelize.define("informe de review", {
        idReport: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cuerpo: {
            type: Sequelize.TEXT,
            allowNull: false,
        }
    });
    return InformeReview;
}

module.exports = (sequelize, Sequelize) => {
    const InformeJuego = sequelize.define("informe de juego", {
        idReport: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cuerpo: {
            type: Sequelize.TEXT,
            allowNull: false,
        }
    });
    return InformeJuego;
}

module.exports = (sequelize, Sequelize) => {
    const InformeUsuario = sequelize.define("informe de usuario", {
        idReport: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cuerpo: {
            type: Sequelize.TEXT,
            allowNull: false,
        }
    });
    return InformeUsuario;
}