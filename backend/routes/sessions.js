const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth'); // Import the middleware
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Session Routes

// Create combat session
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

//Load comabat sessions
router.get('/load', authenticateToken, async (req, res) => {
	try {
		const sessions = await prisma.session.findMany();
		res.status(201).send({
			message: `${sessions.length} sessions loaded successfully`,
			sessions: sessions,
		});
	} catch (error) {
		console.error('Error fetching sessions:', error);
		res.status(500).send({
			message: 'Failed to load sessions',
			error: error.message,
		});
	}
});

module.exports = router;
