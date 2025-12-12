const { DataTypes} = require('sequelize');
const db = require('../database/db');

const GenreMovie = db.sequelize.define('genremovie', {}, {timestamps: false});

Genre = require('../model/genre');
Movie = require('../model/movie');

Genre.belongsToMany(Movie, {
    through: GenreMovie,
    foreignKey: 'id_genre'
});
Movie.belongsToMany(Genre, {
    through: GenreMovie,
    foreignKey: 'id_movie'
});

GenreMovie.sync({create:true, alter:true});

module.exports = GenreMovie;