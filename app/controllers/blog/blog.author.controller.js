const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const BlogAuthor = db.blog_author;

exports.findAllAuthors = (req, res) => {

    BlogAuthor.findAll()
        .then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;


                var results = {
                    id: d.id,
                    username: d.username,
                    email: d.email,
                    password: d.password,
                    profile_photo: d.profile_photo,

                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving authors."
            });
        });
};