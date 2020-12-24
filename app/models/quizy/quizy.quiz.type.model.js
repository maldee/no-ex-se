module.exports = (sequelize, Sequelize) => {
    const quizy_quiz_type = sequelize.define("quizy_quiz_type", {
        type: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return quizy_quiz_type;
};