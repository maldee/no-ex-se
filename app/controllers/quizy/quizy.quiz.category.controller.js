const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const QuizyQuizCategories = db.quizy_quiz_category;


exports.findAllCategories = (req, res) => {

    QuizyQuizCategories.findAll()
        .then(data => {
            var objectArray = [];
            var totalItemCount = data.length;

            for (var i in data) {
                var d = data[i];

                var results = {
                    id: d.id,
                    category: d.category,
                };
                objectArray.push(results);
            }
            res.send({ count: totalItemCount, results: objectArray });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving quiz categories."
            });
        });
};