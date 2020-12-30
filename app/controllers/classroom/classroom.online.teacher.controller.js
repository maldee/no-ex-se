const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;

const ClassroomOnlineTeacher = db.classroom_online_teacher;


exports.findAllOnlineTeachers = (req, res) => {
    ClassroomOnlineTeacher.findAll({
        where: {
            grade: req.params.grade,
            subject: req.params.subject,
        }
    }).then((data) => {
        var objectArray = [];
        var totalItemCount = data.length;
        for (var i in data) {
            var d = data[i];

            var results = {
                id: d.id,
                teacher: d.teacher,
                subject: d.subject,
                grade: d.grade
            };
            objectArray.push(results);
        }
        res.send({ count: totalItemCount, results: objectArray });

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while searching teachers",
        });
    });
};