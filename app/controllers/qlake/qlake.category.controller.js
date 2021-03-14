const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const QlakeCategory = db.qlake_category;


exports.create = (req, res) => {

    // Create a question
    const category = {
        qid: req.body.qid,
        category_name: req.body.category_name,
        category_image: req.body.category_image,
    };

    // Save category in database
    QlakeCategory.create(category)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving video",
            });
        });
};

exports.findAllCategories = (req, res) => {

    QlakeCategory.findAll()
        .then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;


                var results = {
                    id: d.id,
                    category_name: d.category_name,
                    category_image: d.category_image,

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