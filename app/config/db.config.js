// Heroku Integration

module.exports = {
    HOST: "containers-us-west-121.railway.app",
    USER: "postgres",
    PASSWORD: "qumlKcpiyzcdCwYdc8Ng",
    DB: "railway",
    dialect: "postgres",
    port: 7966,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// render db details

// module.exports = {
//     HOST: "dpg-ck3rf7r6fquc73ecvp00-a",
//     USER: "dee",
//     PASSWORD: "uyKaxx5NAbCnK74472a7GsWLqFtUXwX0",
//     DB: "deeflow",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };

// Localhost Integration

// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "coco1234",
//     DB: "deeflow",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };