const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('User',{
    email: {
        type: DataTypes.STRING,
        alloNull: false,
        unique: false,
    },
    password: {
        type: DataTypes.STRING,
        alloNull: false
    },

});

module.exports = User;