const { authJwt } = require("../middleware");
const cloudyProductController = require("../controllers/cloudy/cloudy.product.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/cloudy/products", [authJwt.verifyToken],
        cloudyProductController.findAllProducts
    );
    app.get(
        "/api/cloudy/products/:id", [authJwt.verifyToken],
        cloudyProductController.findByProductId
    );
};