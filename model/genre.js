const { DataTypes, HasMany } = require('sequelize');
const db = require('../database/db');

const Movie = require('./movie')

const Genre = db.sequelize.define('genre', {
    id_genre: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }},
    {
        timestamps: false
});

Genre.sync({create:true});


module.exports = Genre;