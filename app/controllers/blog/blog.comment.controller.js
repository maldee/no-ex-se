const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const BlogComment = db.blog_comment;


exports.create = (req, res) => {

    // Create a comment
    const comment = {
        id: req.body.id,
        pid: req.body.pid,
        author: req.body.author,
        comment: req.body.comment,
    };


    BlogComment.create(comment)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving video",
            });
        });
};

exports.findCommentsById = (req, res) => {

    BlogComment.findAll({ where: { qid: req.params.id } })
        .then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;


                var results = {
                    id: d.id,
                    pid: d.pid,
                    author: d.author,
                    comment: d.comment,

                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving comment."
            });
        });
};