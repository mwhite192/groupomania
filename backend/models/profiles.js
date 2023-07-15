module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define(
      "profile",
      {
        userId: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        formFile: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        formGridEmail: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        formGridPassword: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        formGridPosition: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        formGridPhone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        formGridWorkOffice: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        formGridCity: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        formGridState: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        formGridZip: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        freezeTableName: true,
      }
    );
     
    return Profile;
}