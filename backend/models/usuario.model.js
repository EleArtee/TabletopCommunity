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
        contrasena:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        isDeveloper:{
            type: Sequelize.BOOLEAN,
        },
        empresa:{
            type: Sequelize.STRING,
            unique: true
        },
    });

    return Usuario;
}