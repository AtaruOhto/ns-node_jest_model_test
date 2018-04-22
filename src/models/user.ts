const Sequelize = require('sequelize');
import sequelize from 'src/db'

export const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        null: false
    },
    password: {
        type: Sequelize.STRING,
        null: false
    },
    nickname: {
        type: Sequelize.STRING,
        null: false,
        validate: {
            len: [8, 20],
        }
    }
});