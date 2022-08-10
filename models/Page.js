const sequelize = require("sequelize");
const models = require("./models");

const Page = models.define("page", {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    slug: {
        type: Sequelize.CIDR,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});