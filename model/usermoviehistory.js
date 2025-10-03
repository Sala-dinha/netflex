const { DataTypes} = require('sequelize');
const db = require('../database/db');

const UserMovieHistory = db.sequelize.define('usermoviehistory', {
    tempo: {
        type: DataTypes.INTEGER,
    }    
});

User = require('../model/user');
Movie = require('../model/movie');

User.belongsToMany(Movie, {
    through: UserMovieHistory,
    foreignKey: 'id_user'
});
Movie.belongsToMany(User, {
    through: UserMovieHistory,
    foreignKey: 'id_movie'
});

UserMovieHistory.sync({create:true});

module.exports = UserMovieHistory;