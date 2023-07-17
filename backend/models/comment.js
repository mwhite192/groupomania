module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define(
      "Comment",
      {
        postId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        userId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        profilePicture: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        commentText: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        commentDate: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        likes: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        usersLiked: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
      }
    );
     
    //  // adds postId foreign key
    //   Comment.associate = (models) => {
    //     Comment.belongsTo(models.post, {
    //       foreignKey: {
    //         allowNull: false,
    //       },
    //     });
    //   };


    return Comment;
}