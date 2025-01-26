module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
        idReview: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        estrellas: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        cuerpo: {
            type: Sequelize.TEXT,
        }
    });
    return Review;
}