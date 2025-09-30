const { DataTypes } = require('sequelize');
const db = require('../database/db');
const User = require('./user');

const Post = db.sequelize.define('post', {
    id_post: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});



Post.sync({create: true});

module.exports = Post;