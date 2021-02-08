module.exports = (sequelize, Sequelize) => {
    const chatbits_language = sequelize.define("chatbits_language", {
        language: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return chatbits_language;
};