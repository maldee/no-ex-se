const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user/user.model.js")(sequelize, Sequelize);
db.role = require("../models/user/role.model.js")(sequelize, Sequelize);

db.chatbits_phrase = require("../models/chatbits/chatbits.phrase.model.js")(sequelize, Sequelize);
db.chatbits_category = require("../models/chatbits/chatbits.category.model.js")(sequelize, Sequelize);
db.chatbits_situation = require("../models/chatbits/chatbits.situation.model.js")(sequelize, Sequelize);

db.classroom_video = require("../models/classroom/classroom.video.model.js")(sequelize, Sequelize);
db.classroom_video_grade = require("../models/classroom/classroom.video.grade.model.js")(sequelize, Sequelize);
db.classroom_video_subject = require("../models/classroom/classroom.video.subject.model.js")(sequelize, Sequelize);
db.classroom_video_teacher = require("../models/classroom/classroom.video.teacher.model.js")(sequelize, Sequelize);
db.classroom_online_teacher = require("../models/classroom/classroom.online.teacher.model.js")(sequelize, Sequelize);

db.store_product = require("../models/store/store.product.model.js")(sequelize, Sequelize);

db.blog_post = require("../models/blog/blog.post.model.js")(sequelize, Sequelize);
db.blog_category = require("../models/blog/blog.category.model.js")(sequelize, Sequelize);
db.blog_author = require("../models/blog/blog.author.model.js")(sequelize, Sequelize);

db.quizy_quiz = require("../models/quizy/quizy.quiz.model.js")(sequelize, Sequelize);
db.quizy_quiz_category = require("../models/quizy/quizy.quiz.category.model.js")(sequelize, Sequelize);
db.quizy_quiz_type = require("../models/quizy/quizy.quiz.type.model.js")(sequelize, Sequelize);

db.qlake_question = require("../models/qlake/qlake.question.model.js")(sequelize, Sequelize);
db.qlake_answer = require("../models/qlake/qlake.answer.model.js")(sequelize, Sequelize);
db.qlake_category = require("../models/qlake/qlake.category.model.js")(sequelize, Sequelize);
db.qlake_author = require("../models/qlake/qlake.author.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    otherKey: "roleId",
    foreignKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["User", "Admin", "Moderator"];

module.exports = db;