module.exports = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "b64db9545d6b9a",
    PASSWORD: "0ddcd162",
    DB: "heroku_d1b3fa7d8905dd7",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};