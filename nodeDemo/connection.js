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

db.registration = require('./Models/Registration.model')(sequelize, DataTypes);
db.login = require('./Models/Login.model')(sequelize, DataTypes);
db.addpost = require('./Models/Addpost.model')(sequelize, DataTypes);
db.follow = require('./Models/Follow.model')(sequelize, DataTypes)

db.registration.hasMany(db.addpost);

db.registration.belongsToMany(db.registration, { as: "User", through: db.follow, foreignKey: 'senderId' })
db.registration.belongsToMany(db.registration, { as: "Followed", through: db.follow, foreignKey: 'reciverId' })

db.sequelize.sync().then(() => {
    console.log("done");
}).catch(console.log)

module.exports = db;


