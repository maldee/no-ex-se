const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {

    const user = {
        displayName: req.body.displayName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    };

    // Save User to Database
    User.create(user)
        .then(user => {
            if (req.body.roles) {
                Role.findAll({
                    where: {
                        id: {
                            [Op.or]: req.body.roles
                        }
                    }
                }).then(roles => {
                    user.setRoles(roles).then(() => {
                        res.send({ message: "User registered successfully!" });
                    });
                });
            } else {
                // user role = 1
                user.setRoles([1]).then(() => {

                    const userDetails = {
                        id: user.id,
                        displayName: user.displayName,
                        email: user.email,
                        password: user.password
                    }

                    res.status(200).send(userDetails);

                    // res.send({ message: "User registered successfully!" });
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.signin = (req, res) => {

    const loginUser = {
        email: req.body.email,
        password: req.body.password,
    }

    console.log(req.body.email)

    User.findAll({ where: { email: loginUser.email } })
        .then(user => {

            var objectArray = [];
            for (var i in user) {
                var d = user[i];

                var results = {
                    id: d.id,
                    email: d.email,
                    password: d.password,
                    displayName: d.displayName,
                    roles: d.roles,
                    accessToken: d.accessToken,
                };
                objectArray.push(results);
            }
            console.log("start-" + JSON.stringify(objectArray) + "-end");

            if (!results.email) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                results.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }



            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });


            const userDetails = {
                id: results.id,
                displayName: results.displayName,
                email: results.email,
                roles: results.role,
                accessToken: token
            }

            res.status(200).send(userDetails);

            // var authorities = [];
            // user.getRoles().then(roles => {
            //     for (let i = 0; i < roles.length; i++) {
            //         authorities.push("ROLE_" + roles[i].name.toUpperCase());
            //     }

            //     const results = {
            //         id: user.id,
            //         displayName: user.displayName,
            //         email: user.email,
            //         roles: authorities,
            //         accessToken: token
            //     }

            //     res.status(200).send(results);
            // });

        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};