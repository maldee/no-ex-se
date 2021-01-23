module.exports = (sequelize, Sequelize) => {
    const blog_post = sequelize.define("blog_post", {
        author: {
            type: Sequelize.TEXT
        },
        url: {
            type: Sequelize.TEXT
        },
        title: {
            type: Sequelize.TEXT
        },
        slug: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.TEXT
        },
        content: {
            type: Sequelize.TEXT('long')
        },
        read_time: {
            type: Sequelize.INTEGER
        },
        likes: {
            type: Sequelize.INTEGER
        },
        category_name: {
            type: Sequelize.TEXT
        },
        tags: {
            type: Sequelize.TEXT
        },
        publish: {
            type: Sequelize.TEXT
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return blog_post;
};