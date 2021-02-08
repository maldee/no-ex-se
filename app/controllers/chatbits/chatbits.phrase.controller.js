const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const ChatbitsPhrases = db.chatbits_phrase;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Create a Phrase
    const phrase = {
        id: req.body.id,
        english_phrase: req.body.english_phrase,
        non_english_phrase: req.body.non_english_phrase,
        note: req.body.note,
        categories: req.body.categories,
        situations: req.body.situations,
        language: req.body.language,
    };

    // Save phrase in database
    ChatbitsPhrases.create(phrase)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err || "Some error occurred while saving phrase",
            });
        });
};

exports.findAllPosts = (req, res) => {
    ChatbitsPhrases.findAll({ where: { language: req.params.language } })
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