const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // creates the user model
    const User = sequelize.define('User', {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        file: {
          type: DataTypes.STRING,
        },
        registerEmail: {
          type: DataTypes.STRING,
          validate: {
            isEmail: true,
          },
            allowNull: false,
        },
        registerPassword: {
          type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }
     },
        {
            freezeTableName: true,
        });

        // // adds userId foreign key
        // User.associate = function (models) {
        //   User.hasMany(models.Profile);
        // };

    return User;
};
