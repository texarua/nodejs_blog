const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('mysql://root:root@localhost:3306/laravel');

/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
const sequelize = new Sequelize('laravel', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { connect };
