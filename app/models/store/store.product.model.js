module.exports = (sequelize, Sequelize) => {
    const store_product = sequelize.define("store_product", {
        title: {
            type: Sequelize.TEXT('long')
        },
        image: {
            type: Sequelize.TEXT('long')
        },
        description: {
            type: Sequelize.TEXT('long')
        },
        price: {
            type: Sequelize.INTEGER
        },

    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return store_product;
};