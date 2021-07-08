const db = require("../../models");
const config = require("../../config/auth.config");
const { sequelize } = require("../../models");
const User = db.user;
const BlogPost = db.blog_post;
const Op = db.Sequelize.Op;

function getYouTubeId(url) {
    var ID = "";
    url = url
        .replace(/(>|<)/gi, "")
        .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    } else {
        ID = url;
    }
    return ID;
}

exports.create = (req, res) => {
    const post = {
        id: req.body.id,
        author: req.body.author,
        url: req.body.url,
        title: req.body.title,
        slug: req.body.slug,
        image: req.body.image,
        content: req.body.content,
        read_time: req.body.read_time,
        likes: req.body.likes,
        category_name: req.body.category_name,
        tags: req.body.tags,
        publish: req.body.publish,
    };

    // Save post in database
    BlogPost.create(post)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving video",
            });
        });
};

exports.findAllPosts = (req, res) => {
    BlogPost.findAll({
            order: [
                ['publish', 'DESC'],
            ]
        })
        .then((data) => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    author: d.author,
                    url: d.url,
                    title: d.title,
                    slug: d.slug,
                    image: d.image,
                    content: d.content,
                    read_time: d.read_time,
                    likes: d.likes,
                    category_name: d.category_name,
                    tags: d.tags,
                    publish: d.publish,
                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch((err) => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving posts",
            });
        });
};

exports.findAllTags = (req, res) => {
    BlogPost.findAll({attributes: ['tags'], order: 'random()', limit: 30  })
        .then((data) => {
         
            var totalItemCount = data.length;

            res.send({ dataCount: totalItemCount, results: data });
        })

        .catch((err) => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving posts",
            });
        });
};


exports.findPostsByPage = (req, res) => {
    var pageNo = req.params.page;
    BlogPost.findAndCountAll({
        order: [
            ['publish', 'DESC'],
        ],
        offset: (pageNo - 1) * 15,
        limit: 15
    }).then((result) => {
        var totalCount = result.count;
        var data = result.rows;
        var objectArray = [];

        for (var i in data) {
            var d = data[i];

            var itemPerPage = 15;
            var totalItemCount = data.length;
            var page = parseInt(pageNo);

            var tPages = Math.ceil(totalCount / itemPerPage);

            var results = {
                id: d.id,
                author: d.author,
                url: d.url,
                title: d.title,
                slug: d.slug,
                image: d.image,
                content: d.content,
                read_time: d.read_time,
                likes: d.likes,
                category_name: d.category_name,
                tags: d.tags,
                publish: d.publish,
            };
            objectArray.push(results);
        }
        res.send({ totalPages: tPages, totalCount: totalCount, pageCount: totalItemCount, page: page, results: objectArray });


    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while getting posts by page",
        });
    });
};

exports.findLatestPosts = (req, res) => {
    BlogPost.findAll({
            order: [
                ['likes', 'DESC'],
            ],
            limit: 5
        })
        .then((data) => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    author: d.author,
                    url: d.url,
                    title: d.title,
                    slug: d.slug,
                    image: d.image,
                    content: d.content,
                    read_time: d.read_time,
                    likes: d.likes,
                    category_name: d.category_name,
                    tags: d.tags,
                    publish: d.publish,
                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch((err) => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving phrases.",
            });
        });
};

exports.findBySlug = (req, res) => {
    BlogPost.findAll({ where: { slug: req.params.slug } })
        .then((data) => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    author: d.author,
                    url: d.url,
                    title: d.title,
                    slug: d.slug,
                    image: d.image,
                    content: d.content,
                    read_time: d.read_time,
                    likes: d.likes,
                    category_name: d.category_name,
                    tags: d.tags,
                    publish: d.publish,
                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch((err) => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving posts.",
            });
        });
};

exports.findByCategory = (req, res) => {
    BlogPost.findAll({ where: { category_name: req.params.category } })
        .then((data) => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    author: d.author,
                    url: d.url,
                    title: d.title,
                    slug: d.slug,
                    image: d.image,
                    content: d.content,
                    read_time: d.read_time,
                    likes: d.likes,
                    category_name: d.category_name,
                    tags: d.tags,
                    publish: d.publish,
                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch((err) => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving posts.",
            });
        });
};

exports.findByCategoryPage = (req, res) => {
    var pageNo = req.params.page;
    console.log("page num :"+pageNo);
    BlogPost.findAndCountAll({
        where: { category_name: req.params.category},
        order: [
            ['publish', 'DESC'],
        ],
        offset: (pageNo - 1) * 15,
        limit: 15
    }).then((result) => {
            var totalCount = result.count;
            var data = result.rows;
            var objectArray = [];
    
            for (var i in data) {
                var d = data[i];
    
                var itemPerPage = 15;
                var totalItemCount = data.length;
                var page = parseInt(pageNo);
    
                var tPages = Math.ceil(totalCount / itemPerPage);
    
                var results = {
                    id: d.id,
                    author: d.author,
                    url: d.url,
                    title: d.title,
                    slug: d.slug,
                    image: d.image,
                    content: d.content,
                    read_time: d.read_time,
                    likes: d.likes,
                    category_name: d.category_name,
                    tags: d.tags,
                    publish: d.publish,
                };
                objectArray.push(results);
            }
            res.send({ totalPages: tPages, totalCount: totalCount, pageCount: totalItemCount, page: page, results: objectArray });
    
        })
        .catch((err) => {
            res.sendStatus(500).send({
                message: err.message || "Some error accurred while retrieving posts.",
            });
        });
};

exports.searchPost = (req, res) => {
    const q = req.params.q;

    BlogPost.findAll({
            where: {
                [Op.or]: [{
                        slug: {
                            [Op.like]: `${q}%`
                        }
                    },
                    {
                        slug: {
                            [Op.like]: `%${q}%`
                        }
                    },
                    {
                        slug: {
                            [Op.like]: `${q}%`
                        }
                    }
                ]
            }
        })
        .then((data) => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    author: d.author,
                    url: d.url,
                    title: d.title,
                    slug: d.slug,
                    image: d.image,
                    content: d.content,
                    read_time: d.read_time,
                    likes: d.likes,
                    category_name: d.category_name,
                    tags: d.tags,
                    publish: d.publish,
                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch((err) => {
            res.sendStatus(500).send({
                message: err.message || "Some error accurred while retrieving posts.",
            });
        });
};