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