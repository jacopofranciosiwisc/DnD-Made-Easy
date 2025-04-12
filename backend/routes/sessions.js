const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth'); // Import the middleware

// Session Routes

/**
 * Create a combat session
 */
router.post('/', authenticateToken, (req, res) => {
	const { sessionName, state } = req.body;
	// Logic to create a new combat session
	res.status(201).send({ message: 'Combat session created successfully!' });
});

router.get('/', authenticateToken, (req, res) => {
	// Logic to fetch combat sessions
	res.status(200).send({ message: 'Fetched combat sessions successfully!' });
});

module.exports = router;
