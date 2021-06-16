const model = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED
      },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
       unique:true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

    }
  )

  User.associate = ({ Company }) => {
    User.belongsTo(Company)
  }

  return User
}

module.exports = model