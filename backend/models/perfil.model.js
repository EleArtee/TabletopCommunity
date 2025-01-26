module.exports = (sequelize, Sequelize) => {
    const Perfil = sequelize.define("perfil", {
        idProfile: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        descripcion: {
            type: Sequelize.TEXT
        }
    });

    return Perfil;
}