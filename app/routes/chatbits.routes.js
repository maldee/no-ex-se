const { authJwt } = require("../middleware");
const chatbitsPostController = require("../controllers/chatbits/chatbits.phrase.controller");
const chatbitsCategoryController = require("../controllers/chatbits/chatbits.category.controller");
const chatbitsSituationController = require("../controllers/chatbits/chatbits.situation.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/chatbits/phrases/addPhrase", [authJwt.verifyToken],
        chatbitsPostController.create
    );

    // Retrieve all Chatbits Posts
    app.get(
        "/api/chatbits/phrases", [authJwt.verifyToken],
        chatbitsPostController.findAllPosts
    );

    app.get(
        "/api/chatbits/categories", [authJwt.verifyToken],
        chatbitsCategoryController.findAllCategories
    );

    app.get(
        "/api/chatbits/situations", [authJwt.verifyToken],
        chatbitsSituationController.findAllSituations
    );

    app.get(
        "/api/chatbits/phrases/:searched", [authJwt.verifyToken],
        chatbitsPostController.searchByEnglishPhrase
    );
};