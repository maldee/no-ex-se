module.exports = (sequelize, Sequelize) => {
    const chatbits_phrase = sequelize.define("chatbits_phrase", {

        english_phrase: {
            type: Sequelize.TEXT
        },
        non_english_phrase: {
            type: Sequelize.TEXT
        },
        note: {
            type: Sequelize.TEXT
        },
        categories: {
            type: Sequelize.STRING
        },
        situations: {
            type: Sequelize.STRING
        },
        language: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return chatbits_phrase;
};