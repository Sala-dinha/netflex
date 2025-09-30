const { DataTypes, HasMany } = require('sequelize');
const db = require('../database/db');
const Post = require('./post');

const User = db.sequelize.define('user', {
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN
    }
});




User.sync({create: true});

module.exports = User;