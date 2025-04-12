const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth'); // Import the middleware

// Session Routes

// Create combat session
router.post('/create', authenticateToken, (req, res) => {
	const { sessionName } = req.body;

	// Logic to create a new combat session
	res
		.status(201)
		.send({ message: `Combat session: ${sessionName}, created successfully!` });
});

router.get('/load', authenticateToken, (req, res) => {
	// Logic to fetch combat sessions
	res.status(200).send({ message: 'Fetched combat sessions successfully!' });
});

module.exports = router;
