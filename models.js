const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'meal_match',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  email: Sequelize.STRING
});

const Combo = sequelize.define('combo', {
  foodId: Sequelize.INTEGER,
  food: Sequelize.STRING,
  foodImage: Sequelize.STRING,
  foodId: Sequelize.INTEGER,
  drink: Sequelize.STRING,
  drinkImage: Sequelize.STRING,
  drinkId: Sequelize.INTEGER,
});

const Favorite = sequelize.define('favorite', {

});

const Comment = sequelize.define('comment', {
  comment: Sequelize.STRING
  
});

User.belongsToMany(Combo, { as: 'Favorite', through: 'favorites', foreignKey: 'userId' })
Combo.belongsToMany(User, { as: 'Favorite', through: 'favorites', foreignKey: 'comboId' })

// User.belongsToMany(Combo, { as: 'Comment', through: 'comments', foreignKey: 'userId' })
// Combo.belongsToMany(User, { as: 'Comment', through: 'comments', foreignKey: 'comboId' })
User.hasMany(Combo);
// User.hasMany(Comment);
// User.hasMany(Favorite);
// Combo.hasMany(Comment);
// Combo.hasMany(Favorite);
// Combo.belongsTo(User);
// Comment.belongsTo(Combo);
Combo.belongsTo(User);
// Favorite.belongsTo(User);
// Favorite.belongsTo(Combo);


module.exports = {
  User,
  Favorite,
  Combo,
  Comment,
  sequelize
};