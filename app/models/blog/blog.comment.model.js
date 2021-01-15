module.exports = (sequelize, Sequelize) => {
    const blog_comment = sequelize.define("blog_comment", {
        pid: {
            type: Sequelize.INTEGER
        },
        author: {
            type: Sequelize.TEXT
        },
        comment: {
            type: Sequelize.TEXT('long')
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return blog_comment;
};