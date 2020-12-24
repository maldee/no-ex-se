module.exports = (sequelize, Sequelize) => {
    const qlake_answer = sequelize.define("qlake_answer", {
        qid: {
            type: Sequelize.INTEGER
        },
        author: {
            type: Sequelize.TEXT
        },
        answer: {
            type: Sequelize.TEXT('long')
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return qlake_answer;
};