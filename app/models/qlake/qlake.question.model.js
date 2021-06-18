module.exports = (sequelize, Sequelize) => {
    const qlake_question = sequelize.define("qlake_question", {
        author: {
            type: Sequelize.TEXT
        },
        question: {
            type: Sequelize.TEXT
        },
        slug: {
            type: Sequelize.TEXT
        },
        content: {
            type: Sequelize.TEXT('long')
        },
        category_name: {
            type: Sequelize.TEXT
        },
        tags: {
            type: Sequelize.TEXT
        },
        asked: {
            type: Sequelize.TEXT
        },
        views: {
            type: Sequelize.INTEGER
        },
        likes: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.INTEGER
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return qlake_question;
};