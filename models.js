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
  isLiked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
   
    } 
});



const Comment = sequelize.define('comment', {
  comment: Sequelize.STRING
  
});


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