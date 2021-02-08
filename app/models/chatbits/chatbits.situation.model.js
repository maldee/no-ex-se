module.exports = (sequelize, Sequelize) => {
    const chatbits_situation = sequelize.define("chatbits_situation", {
        situation: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return chatbits_situation;
};