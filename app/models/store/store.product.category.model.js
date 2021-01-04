module.exports = (sequelize, Sequelize) => {
    const store_product_category = sequelize.define("store_product_category", {
        category: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.TEXT('long')
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return store_product_category;
};