module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {

        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        displayName: {
            type: Sequelize.STRING
        },
        photoURL: {
            type: Sequelize.STRING
        },
        emailVerified: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        accessToken:{
            type: Sequelize.STRING
        }

    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return User;
};