module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        idUser: {
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
        isAdmin:{
            type: Sequelize.BOOLEAN,
        },
        isDeveloper:{
            type: Sequelize.BOOLEAN,
        },
        empresa:{
            type: Sequelize.STRING,
            unique: true
        },
        nombre:{
            type: Sequelize.STRING,
        },
        apellidos:{
            type: Sequelize.STRING,
        }
    });

    return Usuario;
}