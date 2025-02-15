module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define("tag", {
        idTag: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        }
    });
    return Tag;
}