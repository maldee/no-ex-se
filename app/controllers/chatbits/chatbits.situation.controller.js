const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const ChatbitsSituations = db.chatbits_situation;


exports.findAllSituations = (req, res) => {

    ChatbitsSituations.findAll()
        .then(data => {
            let totalItemCount = data.length;
            res.send({ dataCount: totalItemCount, results: data });
        })
        .catch(err => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving phrases."
            });
        });
};