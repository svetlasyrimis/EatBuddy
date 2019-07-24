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
  isLiked: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false} 
});



const Comment = sequelize.define('comment', {
  comment: Sequelize.STRING
  
});

// User.belongsToMany(Combo, { as: 'Favorite', through: 'favorites', foreignKey: 'userId' })
// Combo.belongsToMany(User, { as: 'Favorite', through: 'favorites', foreignKey: 'comboId' })

// User.belongsToMany(Combo, { as: 'Comment', through: 'comments', foreignKey: 'userId' })
// Combo.belongsToMany(User, { as: 'Comment', through: 'comments', foreignKey: 'comboId' })
User.hasMany(Combo);
Combo.belongsTo(User);
Combo.hasMany(Comment, { onDelete: 'cascade' });
Comment.belongsTo(Combo);



module.exports = {
  User,
  Combo,
  Comment,
  sequelize
};