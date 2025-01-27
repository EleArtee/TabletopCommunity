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