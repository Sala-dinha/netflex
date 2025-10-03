const { DataTypes} = require('sequelize');
const db = require('../database/db');

const History = db.sequelize.define('usermoviehistory', {
    tempo: {
        type: DataTypes.INTEGER,
    }    
});

History.sync({create:true});

module.exports = History;