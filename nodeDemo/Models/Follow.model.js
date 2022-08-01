module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define('Follower', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        sendername: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recivername: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }, {
        createdAt: false,
        updatedAt: false,
    })
    return Follow;
}