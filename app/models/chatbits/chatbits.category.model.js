module.exports = (sequelize, Sequelize) => {
    const chatbits_category = sequelize.define("chatbits_category", {
        category: {
            type: Sequelize.STRING
        },
        language: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return chatbits_category;
};