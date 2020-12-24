const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const QuizyQuiz = db.quizy_quiz;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Create a Phrase
    const quiz = {
        id: req.body.id,
        category: req.body.category,
        type: req.body.type,
        difficulty: req.body.difficulty,
        question: req.body.question,
        correct_answer: req.body.correct_answer,
        incorrect_answers: req.body.incorrect_answers
    };

    // Save phrase in database
    QuizyQuiz.create(quiz)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving quiz",
            });
        });
};

exports.findAll = (req, res) => {

    QuizyQuiz.findAll({
            where: {
                category: req.params.category,
                difficulty: req.params.difficulty,
                type: req.params.type
            },
            limit: parseInt(req.params.amount)
        })
        .then(data => {
            var objectArray = [];

            for (var i in data) {
                var d = data[i];

                var incorrect_answers = [];
                incorrect_answers.push(d.incorrect_answers.split(","));
                var results = {
                    id: d.id,
                    category: d.category,
                    type: d.type,
                    difficulty: d.difficulty,
                    question: d.question,
                    correct_answer: d.correct_answer,
                    incorrect_answers: d.incorrect_answers.split(",")
                };
                objectArray.push(results);
            }
            res.send({ response_code: 0, results: objectArray });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving quizes."
            });
        });
};