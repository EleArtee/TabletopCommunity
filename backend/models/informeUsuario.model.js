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