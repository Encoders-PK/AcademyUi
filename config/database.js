// // config/database.js
// const { Sequelize } = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'mysql',
// });

// const connectDatabase = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Successfully connected to MySQL');
//   } catch (error) {
//     console.error('Unable to connect to MySQL:', error);
//     process.exit(1);
//   }
// };

// connectDatabase();

// module.exports = sequelize;
