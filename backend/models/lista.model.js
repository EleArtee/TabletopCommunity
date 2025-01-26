module.exports = (sequelize, Sequelize) => {
    const Lista = sequelize.define("lista", {
        idList: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        titulo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        descripcion: {
            type: Sequelize.TEXT
        }
    });

    return Lista;
}