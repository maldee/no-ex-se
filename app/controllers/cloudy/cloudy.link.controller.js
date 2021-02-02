const db = require("../../models");
const config = require("../../config/auth.config");
const CloudyLinks = db.cloudy_link;


exports.findAllLinks = (req, res) => {

    CloudyLinks.findAll()
        .then((data) => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    title: d.title,
                    link: d.link,
                    date: d.date,
                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch((err) => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving links."
            });
        });
};