module.exports = (sequelize, Sequelize) => {
    const classroom_video = sequelize.define("classroom_video", {
        title: {
            type: Sequelize.TEXT
        },
        description: {
            type: Sequelize.TEXT
        },
        grade: {
            type: Sequelize.INTEGER
        },
        subject: {
            type: Sequelize.TEXT
        },
        teacher: {
            type: Sequelize.TEXT
        },
        link: {
            type: Sequelize.TEXT
        }

    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return classroom_video;
};