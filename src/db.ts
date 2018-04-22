const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const config: any = require('sequelize.config.json');
const env: any = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const DB_NAME = config[env].database;
const DB_USER = config[env].username;
const DB_PASS = config[env].password;
const DB_HOST = config[env].host;
const DB_DIALECT = config[env].dialect;

export default new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS, {
        host: DB_HOST,
        dialect: DB_DIALECT,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorsAliases: Op
});
