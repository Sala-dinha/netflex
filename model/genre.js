const { DataTypes, HasMany } = require('sequelize');
const db = require('../database/db');

const Genre = db.sequelize.define('genre', {
    id_genre: {
        type: DataTypes.INTEGER,
        auto_increment: true,
        primaryKey: true,
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

Genre.sync({create:true});

module.exports = Genre;