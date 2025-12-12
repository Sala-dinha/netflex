// Genre = require('../model/genre');
// Movie = require('../model/movie');

// Movie.belongsTo(Genre, {
//     constraint: true,
//     foreignKey: 'id_genre'
// });
// Genre.hasMany(Movie, {
//     constraint: true,
//     foreignKey: 'id_genre',
// })

// Movie.sync({create: true, alter: true});
// Genre.sync({create: true, alter: true});

const MovieGenre = require('../model/moviegenre');