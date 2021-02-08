const db = require("../../models");
const config = require("../../config/auth.config");
const ChatbitsLanguages = db.chatbits_language;


exports.findAllLanguages = (req, res) => {

    ChatbitsLanguages.findAll()
        .then(data => {
            let totalItemCount = data.length;
            res.send({ dataCount: totalItemCount, results: data });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving languages."
            });
        });
};