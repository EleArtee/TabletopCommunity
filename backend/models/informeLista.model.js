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