const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;

const ClassroomVideoTeacher = db.classroom_video_teacher;


exports.findAllTeachers = (req, res) => {
    ClassroomVideoTeacher.findAll().then((data) => {
        var objectArray = [];
        var totalItemCount = data.length;
        for (var i in data) {
            var d = data[i];

            var results = {
                id: d.id,
                teacher: d.teacher,
            };
            objectArray.push(results);
        }
        res.send({ count: totalItemCount, results: objectArray });

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while searching video",
        });
    });
};