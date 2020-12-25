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
        "/api/qlake/questions",
        qlakeQuestionController.findAllQuestions
    );
    app.get(
        "/api/qlake/questions/mostPopular",
        qlakeQuestionController.findLatestQuestions
    );
    app.get(
        "/api/qlake/questions/:id",
        qlakeQuestionController.findById
    );
    app.get(
        "/api/qlake/questions/q/:q",
        qlakeQuestionController.searchQuestion
    );
    app.get(
        "/api/qlake/questions/byCategory/list/:category",
        qlakeQuestionController.findByCategory
    );

    app.get(
        "/api/qlake/categories",
        qlakeCategoryController.findAllCategories
    );

    app.get(
        "/api/qlake/answers/:id",
        qlakeAnswerController.findAnswersById
    );

    app.get(
        "/api/qlake/authors/",
        qlakeAuthorController.findAllAuthors
    );
};