module.exports = (sequelize, Sequelize) => {
    const classroom_online_teacher = sequelize.define("classroom_online_teacher", {
        subject: {
            type: Sequelize.STRING
        },
        grade: {
            type: Sequelize.INTEGER
        },
        teacher: {
            type: Sequelize.TEXT
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return classroom_online_teacher;
};