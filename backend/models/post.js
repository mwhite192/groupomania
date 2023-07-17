module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        userId: {
          type: DataTypes.STRING,
          allowNull: false
        }, 
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postProfileImg: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postImg: {
            type: DataTypes.STRING,
        }, 
        postContent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
        },
        usersLiked: {
            type: DataTypes.STRING,
        },
        comment: {
            type: DataTypes.STRING,
        },
     },
        {
            freezeTableName: true,
        });

        // // adds 
        // Post.associate = function (models) {
        //     Post.hasMany(models.comment);
        // };

    return Post;
}