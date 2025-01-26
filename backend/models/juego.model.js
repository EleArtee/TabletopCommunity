module.exports = (sequelize, Sequelize) => {
    const Juego = sequelize.define("juego", {
        idGame: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        descripcion: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        precio:{
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        desarrolladora:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        filename:{
            type: Sequelize.STRING
        }
    });

    return Juego;
}