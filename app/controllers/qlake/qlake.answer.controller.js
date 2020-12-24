const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const QlakeAnswer = db.qlake_answer;


exports.create = (req, res) => {

    // Create a answer
    const answer = {
        id: req.body.id,
        qid: req.body.qid,
        author: req.body.author,
        answer: req.body.answer,
    };

    // Save category in database
    QlakeAnswer.create(answer)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving video",
            });
        });
};

exports.findAnswersById = (req, res) => {

    QlakeAnswer.findAll({ where: { qid: req.params.id } })
        .then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;


                var results = {
                    id: d.id,
                    qid: d.qid,
                    author: d.author,
                    answer: d.answer,

                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving answer."
            });
        });
};