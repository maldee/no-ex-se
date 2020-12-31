module.exports = (sequelize, Sequelize) => {
    const store_product = sequelize.define("store_product", {
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

    return store_product;
};