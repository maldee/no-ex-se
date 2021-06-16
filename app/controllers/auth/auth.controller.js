const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const requser = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    displayName: req.body.displayName,
    role: "User",
  };

  // Save User to Database
  User.create(requser)
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            id: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User registered successfully!" });
          });
        });
      } else {
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400, // 24 hours
        });

        // user role = 1
        user.setRoles([1]).then(() => {
          const userDetails = {
            id: user.id,
            email: user.email,
            password: user.password,
            displayName: user.displayName,
            role: user.role,
            accessToken: token,
          };

          res.status(200).send(userDetails);

          // res.send({ message: "User registered successfully!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: req.body.password,
  };

  console.log(req.body.email);

  User.findAndCountAll({ where: { email: loginUser.email } })
    .then((user) => {
      console.log("coco count " + user.count);
      if (user.count == 0) {
        return res.status(404).send({ message: "User Not found." });
      } else {
        console.log("coco 4 " + JSON.stringify(user.rows[0].role));

        var objectArray = [];
        for (var i in user.rows) {
          var d = user.rows[i];

          var results = {
            id: d.id,
            email: d.email,
            password: d.password,
            displayName: d.displayName,
            role: d.role,
            accessToken: d.accessToken,
          };
          objectArray.push(results);
        }
        console.log("start-" + JSON.stringify(objectArray) + "-end");

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.rows[0].password
        );

        if (!passwordIsValid) {
          return res.status(404).send({
            message: "Invalid Password!",
          });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400, // 24 hours
        });

        const userDetails = {
          id: results.id,
          displayName: results.displayName,
          email: results.email,
          role: user.rows[0].role,
          accessToken: token,
        };

        res.status(200).send(userDetails);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signInWithPopup = (req, res) => {
    
  const loginUser = {
    id: req.body.id,
    displayName: req.body.displayName,
    email: req.body.email,
    photoURL: req.body.photoURL,
    emailVerified: req.body.emailVerified,
    role: req.body.role
  };

  console.log(req.body.email);

  var token = jwt.sign({ id: loginUser.id }, config.secret, {
    expiresIn: 86400, // 24 hours
  });

  const userDetails = {
    uid: loginUser.id,
    displayName: loginUser.displayName,
    email: loginUser.email,
    photoURL: loginUser.photoURL,
    emailVerified: loginUser.emailVerified,
    role: loginUser.role,
    accessToken: token,
  };

  res.status(200).send(userDetails);
};
