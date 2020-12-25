const { authJwt } = require("../middleware");
const classroomVideoController = require("../controllers/classroom/classroom.video.controller");
const classroomVideoGradeController = require("../controllers/classroom/classroom.video.grade.controller");
const classroomVideoSubjectController = require("../controllers/classroom/classroom.video.subject.controller");
const classroomVideoTeacherController = require("../controllers/classroom/classroom.video.teacher.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/classroom/videos/addVideo", [authJwt.verifyToken],
        classroomVideoController.create
    );

    app.get(
        "/api/classroom/videos",
        classroomVideoController.findAll
    );

    app.get(
        "/api/classroom/videos/grades",
        classroomVideoGradeController.findAllGrades
    );

    app.get(
        "/api/classroom/videos/subjects",
        classroomVideoSubjectController.findAllSubjects
    );

    app.get(
        "/api/classroom/videos/teachers",
        classroomVideoTeacherController.findAllTeachers
    );

    // Retrieve all Chatbits Posts
    app.get(
        "/api/classroom/count/:grade/:subject",
        classroomVideoController.findByGradeSubjectCount
    );

    app.get(
        "/api/classroom/videos/:grade/:subject/:page",
        classroomVideoController.findByGradeSubjectPage
    );

    app.get(
        "/api/classroom/videos/:grade/:subject",
        classroomVideoController.findByGradeSubject
    );

    app.get(
        "/api/classroom/videos/:id",
        classroomVideoController.findOne
    );
};