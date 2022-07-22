// module.exports = {
//     HOST: "us-cdbr-east-02.cleardb.com",
//     USER: "b64db9545d6b9a",
//     PASSWORD: "0ddcd162",
//     DB: "heroku_d1b3fa7d8905dd7",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };

// Heroku Integration

// module.exports = {
//     HOST: "ec2-3-214-3-162.compute-1.amazonaws.com",
//     USER: "iiymmtiyzjbffq",
//     PASSWORD: "8be06651f17d7c58bd9b63beea06e0ab9afd6f76f035b05d819bf1dd5b54a826",
//     DB: "d4ogp2vt9h70fa",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };

// Localhost Integration

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "admin",
    DB: "deeflow",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};