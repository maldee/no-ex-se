module.exports = (sequelize, Sequelize) => {
    const cloudy_product = sequelize.define("cloudy_product", {
        title: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },

    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return cloudy_product;
};