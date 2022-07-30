module.exports = (sequelize, DataTypes) => {
    const Follow = sequelize.define('Follower', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false,
    })
    return Follow;
}