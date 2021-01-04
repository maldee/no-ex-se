const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const StoreCategories = db.store_product_category;


exports.findAllCategories = (req, res) => {

    StoreCategories.findAll()
        .then(data => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    category: d.category,
                    image: d.image,
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