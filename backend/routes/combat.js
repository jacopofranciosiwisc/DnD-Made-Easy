const express = require('express');
const router = express.Router();

// Combat Routes
router.post('/', (req, res) => {
	const { sessionName, participants } = req.body;
	// Logic to create a new combat session
	res.status(201).send({ message: 'Combat session created successfully!' });
});

module.exports = router;
