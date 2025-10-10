Genre = require('../model/genre');
Movie = require('../model/movie');

Movie.belongTo(Genre, {
    constraint: true,
    foreignKey: 'id_genre'
});

Genre.hasMany(Movie, {
    constraint: true,
    foreignKey: 'id_genre'
})