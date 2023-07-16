module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        userId: {
          type: DataTypes.STRING,
          allowNull: false
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
            allowNull: false,
        },
        usersLiked: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
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