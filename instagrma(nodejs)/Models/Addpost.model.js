module.exports = (sequelize, DataTypes) => {
    const Addpost = sequelize.define('Post', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        createdAt: false,
        updatedAt: false,
    })
    return Addpost;
}