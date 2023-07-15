module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        userId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        profilePicture: {
          type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        likes: {
        type: DataTypes.INTEGER,
            allowNull: false,
        },
        usersLiked: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false,
        },
     },
        {
            freezeTableName: true,
        }
     );
     
    return Post;
}