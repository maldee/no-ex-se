const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const QuizyQuizTypes = db.quizy_quiz_type;


exports.findAllTypes = (req, res) => {

    QuizyQuizTypes.findAll()
        .then(data => {
            var objectArray = [];
            var totalItemCount = data.length;

            for (var i in data) {
                var d = data[i];

                var results = {
                    id: d.id,
                    type: d.type,
                };
                objectArray.push(results);
            }
            res.send({ count: totalItemCount, results: objectArray });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving quiz types."
            });
        });
};