module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        idAdmin: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nick: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        contraseña:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        nombre:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        apellidos:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        direccion:{
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    return Admin;
}