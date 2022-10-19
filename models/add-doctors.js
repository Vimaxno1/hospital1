const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const AddDoctor = sequelize.define('adddoctor', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  username: Sequelize.STRING,
  dateofbirth: Sequelize.DATE,
  gender: Sequelize.STRING,
  speciality: Sequelize.STRING,
  phone: Sequelize.BIGINT,
  email: Sequelize.STRING,
  WEbUrl: Sequelize.STRING,
  fileUrl: Sequelize.STRING,
  Note: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = AddDoctor;
