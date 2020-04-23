// config/database.js
require('dotenv').config();

module.exports = {
  'connection': {
      'host': `${process.env.DB_HOST}`,
      'user': `${process.env.DB_USER}`,
      'password': `${process.env.DB_PASS}`
  },
	'database': 'test',
  'users_table': 'users'
};