const { authJwt } = require("../middleware");
const blogPostController = require("../controllers/blog/blog.post.controller");
const blogCategoryController = require("../controllers/blog/blog.category.controller");
const blogAuthorController = require("../controllers/blog/blog.author.controller");
const blogCommentController = require("../controllers/blog/blog.comment.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/blog/addPost", [authJwt.verifyToken],
        blogPostController.create
    );

    app.post(
        "/api/blog/addCategory", [authJwt.verifyToken],
        blogCategoryController.create
    );

    app.post(
        "/api/blog/posts/addComment", [authJwt.verifyToken],
        blogCommentController.create
    );

    app.get(
        "/api/blog/posts",
        blogPostController.findAllPosts
    );

    app.get("/api/blog/categories", blogCategoryController.findAllCategories);

    app.get(
        "/api/blog/authors/",
        blogAuthorController.findAllAuthors
    );

    app.get(
        "/api/blog/posts/mostPopular",
        blogPostController.findLatestPosts
    );

    app.get(
        "/api/blog/posts/:slug",
        blogPostController.findBySlug
    );

    app.get(
        "/api/blog/comments/:id",
        blogCommentController.findCommentsById
    );

    app.get(
        "/api/blog/posts/byCategory/list/:category",
        blogPostController.findByCategory
    );

    app.get(
        "/api/blog/posts/byCategory/list/:category/:page",
        blogPostController.findByCategoryPage
    );

    app.get(
        "/api/blog/posts/page/:page",
        blogPostController.findPostsByPage
    );

    app.get(
        "/api/blog/posts/q/:q",
        blogPostController.searchPost
    );
};