module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment', {
       postId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userId: {
          type: DataTypes.STRING,
          allowNull: false
        },
        username: {
          type: DataTypes.STRING,
            allowNull: false,
        },
        profilePicture: {
          type: DataTypes.STRING,
            allowNull: false,
        },
        commentText: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        commentDate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        likes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        usersLiked: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
     },
        {
            freezeTableName: true,
        }
     );
     
    return Comment;
}