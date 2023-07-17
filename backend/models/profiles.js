module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define(
      'Profile',
      {
        userId: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        formFile: {
          type: Sequelize.STRING,
        },
        formGridEmail: {
          type: Sequelize.STRING,
        },
        formGridPassword: {
          type: Sequelize.STRING,
        },
        formGridPosition: {
          type: Sequelize.STRING,
        },
        formGridPhone: {
          type: Sequelize.STRING,
        },
        formGridWorkOffice: {
          type: Sequelize.STRING, 
        },
        formGridCity: {
          type: Sequelize.STRING,
        },
        formGridState: {
          type: Sequelize.STRING,
        },
        formGridZip: {
          type: Sequelize.STRING,
        },
      },
      {
        freezeTableName: true,
      
      }
    );

    // // adds userId foreign key
    // Profile.associate = (models) => {
    //   Profile.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false,
    //     },
    //   });
    // };
    
    return Profile;
  };
