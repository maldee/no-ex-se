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
        "/api/classroom/videos", [authJwt.verifyToken],
        classroomVideoController.findAll
    );

    app.get(
        "/api/classroom/videos/grades", [authJwt.verifyToken],
        classroomVideoGradeController.findAllGrades
    );

    app.get(
        "/api/classroom/videos/subjects", [authJwt.verifyToken],
        classroomVideoSubjectController.findAllSubjects
    );

    app.get(
        "/api/classroom/videos/teachers", [authJwt.verifyToken],
        classroomVideoTeacherController.findAllTeachers
    );

    // Retrieve all Chatbits Posts
    app.get(
        "/api/classroom/count/:grade/:subject", [authJwt.verifyToken],
        classroomVideoController.findByGradeSubjectCount
    );

    app.get(
        "/api/classroom/videos/:grade/:subject/:page", [authJwt.verifyToken],
        classroomVideoController.findByGradeSubjectPage
    );

    app.get(
        "/api/classroom/videos/:grade/:subject", [authJwt.verifyToken],
        classroomVideoController.findByGradeSubject
    );

    app.get(
        "/api/classroom/videos/:id", [authJwt.verifyToken],
        classroomVideoController.findOne
    );
};