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
    USER: "postgres",
    PASSWORD: "coco1234",
    DB: "deeflow",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};