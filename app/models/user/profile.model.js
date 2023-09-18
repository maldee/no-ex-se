module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define("profile", {

        name: {
            type: Sequelize.STRING
        },
        livesIn: {
            type: Sequelize.STRING
        },
        contactNo:{
            type: Sequelize.STRING
        },
        gender:{
            type: Sequelize.STRING
        },
        birthday:{
            type: Sequelize.STRING
        },
        birthTime:{
            type: Sequelize.STRING
        },
        birthPlace:{
            type: Sequelize.STRING
        },
        religion:{
            type: Sequelize.STRING
        },
        relationShip:{
            type: Sequelize.STRING
        },
        educationLevel: {
            type: Sequelize.STRING
        },
        career: {
            type: Sequelize.STRING
        },
        hobbies:{
            type: Sequelize.STRING
        }

    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return Profile;
};