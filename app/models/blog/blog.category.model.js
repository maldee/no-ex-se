module.exports = (sequelize, Sequelize) => {
    const blog_category = sequelize.define("blog_category", {
        category_name: {
            type: Sequelize.TEXT
        },
        category_image: {
            type: Sequelize.TEXT
        },
        category_english_name: {
            type: Sequelize.TEXT
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return blog_category;
};