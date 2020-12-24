module.exports = (sequelize, Sequelize) => {
    const classroom_video_grade = sequelize.define("classroom_video_grade", {
        grade: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return classroom_video_grade;
};