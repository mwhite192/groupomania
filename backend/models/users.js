module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        file: {
          type: DataTypes.STRING,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        registerEmail: {
          type: DataTypes.STRING,
            allowNull: false,
        },
        registerPassword: {
          type: DataTypes.STRING,
            allowNull: false,
        },
        timestamp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
     },
        {
            freezeTableName: true,
        }
     );
     
    return User;
}