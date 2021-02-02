module.exports = (sequelize, Sequelize) => {
    const cloudy_link = sequelize.define("cloudy_link", {
        title: {
            type: Sequelize.TEXT
        },
        link: {
            type: Sequelize.TEXT('long')
        },
        date: {
            type: Sequelize.TEXT
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return cloudy_link;
};