const { authJwt } = require("../middleware");
const storeProductController = require("../controllers/store/store.product.controller");
const storeProductCategoryController = require("../controllers/store/store.product.category.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/store/products",
        storeProductController.findAllProducts
    );

    app.get(
        "/api/store/products/categories",
        storeProductCategoryController.findAllCategories
    );

    app.get(
        "/api/store/products/:id",
        storeProductController.findByProductId
    );
};