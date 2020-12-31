const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const StoreProducts = db.store_product;


exports.findAllProducts = (req, res) => {

    StoreProducts.findAll()
        .then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    title: d.title,
                    description: d.description,
                    image: d.image,
                    price: d.price,
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

exports.findByProductId = (req, res) => {

    StoreProducts.findAll({
            where: {
                id: req.params.id,
            }
        }).then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    title: d.title,
                    description: d.description,
                    image: d.image,
                    price: d.price,
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