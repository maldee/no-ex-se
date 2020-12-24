module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "admin",
    DB: "heroku_7814f402e2e3662",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};