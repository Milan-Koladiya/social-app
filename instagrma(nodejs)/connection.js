const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Instagram', 'postgres', 'Dharmik0137', {
    host: 'localhost',
    dialect: 'postgres'
});

try {
    sequelize.authenticate();
    console.log("Success");
} catch (error) {
    console.log(error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.registration = require('./Models/Registration.model')(sequelize, DataTypes)


