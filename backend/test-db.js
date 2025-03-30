const pool = require('./db');

(async () => {
	try {
		const result = await pool.query('SELECT NOW()'); // Simple query to get the current time
		console.log('Database connected successfully:', result.rows[0]);
	} catch (err) {
		console.error('Error connecting to the database:', err);
	} finally {
		pool.end(); // Close the connection pool
	}
})();
