const Sequelize = require('sequelize');
const async = require('async');

const sequelize = new Sequelize('hospital', 'root', 'Edithdadi@1', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
