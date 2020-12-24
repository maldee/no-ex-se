const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;

const ClassroomVideoGrade = db.classroom_video_grade;

exports.findAllGrades = (req, res) => {
    console.log("hello grade")
    ClassroomVideoGrade.findAll().then((data) => {
        var objectArray = [];
        var totalItemCount = data.length;
        for (var i in data) {
            var d = data[i];

            var results = {
                id: d.id,
                grade: d.grade,
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