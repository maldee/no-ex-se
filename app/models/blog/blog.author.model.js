module.exports = (sequelize, Sequelize) => {
    const blog_author = sequelize.define("blog_author", {
        username: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.TEXT
        },
        password: {
            type: Sequelize.TEXT
        },
        profile_photo: {
            type: Sequelize.TEXT
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return blog_author;
};