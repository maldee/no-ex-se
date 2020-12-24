module.exports = (sequelize, Sequelize) => {
    const classroom_video_subject = sequelize.define("classroom_video_subject", {
        subject: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return classroom_video_subject;
};