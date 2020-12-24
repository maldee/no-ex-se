module.exports = (sequelize, Sequelize) => {
    const qlake_category = sequelize.define("qlake_category", {
        category_name: {
            type: Sequelize.TEXT
        },
        category_image: {
            type: Sequelize.TEXT
        },
        category_english_name: {
            type: Sequelize.TEXT
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return qlake_category;
};