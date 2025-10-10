const { DataTypes, HasMany } = require('sequelize');
const db = require('../database/db');
const Genre = require('./genre');


const Movie = db.sequelize.define('movie', {
    id_movie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sinopse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    classificacao: {
        type: DataTypes.INTEGER,
        allowNull: false        
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        timestamps: false
});

Movie.sync({create:true});


module.exports = Movie;