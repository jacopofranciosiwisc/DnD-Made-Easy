const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth'); // Import the middleware
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Session Routes

// Create combat session
//use cam's email to validate dm: cpedmunds02@gmail.com
router.post('/create', authenticateToken, async (req, res) => {
	const { sessionName } = req.body;

	if (!sessionName || typeof sessionName !== 'string') {
		return res
			.status(400)
			.json({ error: 'Session name is required and must be a string.' });
	}

	try {
		const session = await prisma.session.create({
			data: {
				name: sessionName,
				dmId: req.user.id,
			},
		});
		res.status(201).send({
			message: `Combat session: ${session.name}, created successfully!`,
			id: session.id,
		});
	} catch (error) {
		console.error('Error creating a session:', error);
		res.status(500).send({
			message: 'Failed to create a session',
			error: error.message,
		});
	}
});

router.get('/load', authenticateToken, (req, res) => {
	// Logic to fetch combat sessions
	res.status(200).send({ message: 'Fetched combat sessions successfully!' });
});

module.exports = router;
