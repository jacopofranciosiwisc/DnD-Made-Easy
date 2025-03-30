const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env

const pool = new Pool({
	connectionString: process.env.DATABASE_URL, // load from env variable
	ssl: {
		rejectUnauthorized: false, // required for Neon (or other managed databases)
	},
});

module.exports = pool;
