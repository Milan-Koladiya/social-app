module.exports = (sequelize, DataTypes) => {
    const Login = sequelize.define('Auth', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false,
    })
    return Login;
}