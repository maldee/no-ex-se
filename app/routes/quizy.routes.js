const { authJwt } = require("../middleware");
const quizyQuizController = require("../controllers/quizy/quizy.quiz.controller");
const quizyQuizCatgoryController = require("../controllers/quizy/quizy.quiz.category.controller");
const quizyQuizTypeController = require("../controllers/quizy/quizy.quiz.type.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/quizy/quizes/addQuiz", [authJwt.verifyToken],
        quizyQuizController.create
    );

    app.get(
        "/api/quizy/setup/:amount/:category/:difficulty/:type",
        quizyQuizController.findAll
    );

    app.get(
        "/api/quizy/quizes/categories",
        quizyQuizCatgoryController.findAllCategories
    );

    app.get(
        "/api/quizy/quizes/types",
        quizyQuizTypeController.findAllTypes
    );
};