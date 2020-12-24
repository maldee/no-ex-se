module.exports = (sequelize, Sequelize) => {
    const quizy_quiz_category = sequelize.define("quizy_quiz_category", {
        category: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return quizy_quiz_category;
};