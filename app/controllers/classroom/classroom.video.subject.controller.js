const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;

const ClassroomVideoSubject = db.classroom_video_subject;

exports.findAllSubjects = (req, res) => {
    ClassroomVideoSubject.findAll().then((data) => {
        var objectArray = [];
        var totalItemCount = data.length;
        for (var i in data) {
            var d = data[i];

            var results = {
                id: d.id,
                subject: d.subject,
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