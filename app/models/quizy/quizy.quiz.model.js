module.exports = (sequelize, Sequelize) => {
    const quizy_quiz = sequelize.define("quizy_quiz", {
        category: {
            type: Sequelize.TEXT
        },
        type: {
            type: Sequelize.TEXT
        },
        difficulty: {
            type: Sequelize.TEXT
        },
        question: {
            type: Sequelize.TEXT
        },
        correct_answer: {
            type: Sequelize.TEXT
        },
        incorrect_answers: {
            type: Sequelize.TEXT
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return quizy_quiz;
};