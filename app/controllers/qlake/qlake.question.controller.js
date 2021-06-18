const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const QlakeQuestion = db.qlake_question;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Create a Phrase
    const question = {
        id: req.body.id,
        author: req.body.author,
        question: req.body.question,
        slug: req.body.slug,
        content: req.body.content,
        category_name: req.body.category_name,
        tags: req.body.tags,
        asked: req.body.asked,
        views: req.body.views,
        likes: req.body.likes,
        status: req.body.status,

    };

    // Save question in database
    QlakeQuestion.create(question)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving video",
            });
        });
};

exports.findAllQuestions = (req, res) => {
    QlakeQuestion.findAll({
        order: [
            ['id', 'DESC'],
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
                    question: d.question,
                    slug: d.slug,
                    content: d.content,
                    category_name: d.category_name,
                    tags: d.tags,
                    asked: d.asked,
                    views: d.views,
                    likes: d.likes,
                    status: d.status,
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


exports.findLatestQuestions = (req, res) => {

    QlakeQuestion.findAll({
            limit: 5,
            order: [
                ['likes', 'DESC'],
            ]
        })
        .then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    author: d.author,
                    question: d.question,
                    slug: d.slug,
                    content: d.content,
                    category_name: d.category_name,
                    tags: d.tags,
                    asked: d.asked,
                    views: d.views,
                    likes: d.likes,
                    status: d.status,
                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving phrases."
            });
        });
};

exports.findById = (req, res) => {
    QlakeQuestion.findAll({
            where: {
                id: req.params.id,
            }
        })
        .then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    author: d.author,
                    question: d.question,
                    slug: d.slug,
                    content: d.content,
                    category_name: d.category_name,
                    tags: d.tags,
                    asked: d.asked,
                    views: d.views,
                    likes: d.likes,
                    status: d.status,

                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving phrases."
            });
        });
};

exports.findByCategory = (req, res) => {

    QlakeQuestion.findAll({
            where: { category_name: req.params.category }
        })
        .then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    author: d.author,
                    question: d.question,
                    slug: d.slug,
                    content: d.content,
                    category_name: d.category_name,
                    tags: d.tags,
                    asked: d.asked,
                    views: d.views,
                    likes: d.likes,
                    status: d.status,
                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving phrases."
            });
        });
};

exports.searchQuestion = (req, res) => {
    const searched = req.params.q;

    QlakeQuestion.findAll({
            where: {
                [Op.or]: [{
                        slug: {
                            [Op.like]: `${searched}%`
                        }
                    },
                    {
                        slug: {
                            [Op.like]: `%${searched}%`
                        }
                    },
                    {
                        slug: {
                            [Op.like]: `${searched}%`
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
                    question: d.question,
                    slug: d.slug,
                    content: d.content,
                    category_name: d.category_name,
                    tags: d.tags,
                    asked: d.asked,
                    views: d.views,
                    likes: d.likes,
                    status: d.status,

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