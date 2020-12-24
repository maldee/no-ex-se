module.exports = (sequelize, Sequelize) => {
    const classroom_video_teacher = sequelize.define("classroom_video_teacher", {
        teacher: {
            type: Sequelize.TEXT
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return classroom_video_teacher;
};