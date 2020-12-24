module.exports = (sequelize, Sequelize) => {
    const qlake_author = sequelize.define("qlake_author", {
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
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return qlake_author;
};