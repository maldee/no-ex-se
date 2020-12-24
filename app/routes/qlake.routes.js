const { authJwt } = require("../middleware");
const qlakeQuestionController = require("../controllers/qlake/qlake.question.controller");
const qlakeAnswerController = require("../controllers/qlake/qlake.answer.controller");
const qlakeCategoryController = require("../controllers/qlake/qlake.category.controller");
const qlakeAuthorController = require("../controllers/qlake/qlake.author.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/qlake/addQuestion", [authJwt.verifyToken],
        qlakeQuestionController.create
    );
    app.post(
        "/api/qlake/addAnswer", [authJwt.verifyToken],
        qlakeAnswerController.create
    );
    app.post(
        "/api/qlake/addCategory", [authJwt.verifyToken],
        qlakeCategoryController.create
    );

    app.get(
        "/api/qlake/questions", [authJwt.verifyToken],
        qlakeQuestionController.findAllQuestions
    );
    app.get(
        "/api/qlake/questions/mostPopular", [authJwt.verifyToken],
        qlakeQuestionController.findLatestQuestions
    );
    app.get(
        "/api/qlake/questions/:id", [authJwt.verifyToken],
        qlakeQuestionController.findById
    );
    app.get(
        "/api/qlake/questions/q/:q", [authJwt.verifyToken],
        qlakeQuestionController.searchQuestion
    );
    app.get(
        "/api/qlake/questions/byCategory/list/:category", [authJwt.verifyToken],
        qlakeQuestionController.findByCategory
    );

    app.get(
        "/api/qlake/categories", [authJwt.verifyToken],
        qlakeCategoryController.findAllCategories
    );

    app.get(
        "/api/qlake/answers/:id", [authJwt.verifyToken],
        qlakeAnswerController.findAnswersById
    );

    app.get(
        "/api/qlake/authors/", [authJwt.verifyToken],
        qlakeAuthorController.findAllAuthors
    );
};