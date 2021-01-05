module.exports = (sequelize, Sequelize) => {
    const store_product = sequelize.define("store_product", {
        title: {
            type: Sequelize.TEXT('long')
        },
        description: {
            type: Sequelize.TEXT('long')
        },
        price: {
            type: Sequelize.INTEGER
        },
        image_1: {
            type: Sequelize.TEXT('long')
        },
        image_2: {
            type: Sequelize.TEXT('long')
        },
        image_3: {
            type: Sequelize.TEXT('long')
        },
        image_4: {
            type: Sequelize.TEXT('long')
        },
        image_5: {
            type: Sequelize.TEXT('long')
        },

    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return store_product;
};