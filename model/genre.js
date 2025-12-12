const { DataTypes, HasMany } = require('sequelize');
const db = require('../database/db');

const Genre = db.sequelize.define('genre', {
    id_genre: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        timestamps: false
    }
);

Genre.sync({create:true, alter:true});

module.exports = Genre;