const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const ChatbitsPhrases = db.chatbits_phrase;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Create a Phrase
    const phrase = {
        english_phrase: req.body.english_phrase,
        sinhala_phrase: req.body.sinhala_phrase,
        singlish_phrase: req.body.singlish_phrase,
        note: req.body.note,
        categories: req.body.categories,
        situations: req.body.situations,
    };

    // Save phrase in database
    ChatbitsPhrases.create(phrase)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving phrase",
            });
        });
};

exports.findAllPosts = (req, res) => {
    ChatbitsPhrases.findAll()
        .then((data) => {
            let totalItemCount = data.length;
            res.send({ dataCount: totalItemCount, results: data });
        })
        .catch((err) => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving phrases.",
            });
        });
};

exports.searchByEnglishPhrase = (req, res) => {
    const searched = req.params.searched;

    ChatbitsPhrases.findAll({
            where: {
                [Op.or]: [{
                        english_phrase: {
                            [Op.like]: `${searched}%`
                        }
                    },
                    {
                        english_phrase: {
                            [Op.like]: `%${searched}%`
                        }
                    },
                    {
                        english_phrase: {
                            [Op.like]: `${searched}%`
                        }
                    }
                ]

            }
        })
        .then((data) => {
            let totalItemCount = data.length;
            res.send({ dataCount: totalItemCount, results: data });
        })
        .catch((err) => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving phrases.",
            });
        });
};