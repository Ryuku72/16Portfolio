

module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define("user", {
   
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
   
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  user.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return user;
};
