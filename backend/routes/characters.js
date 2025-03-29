const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Character Routes
router.post('/', async (req, res) => {
	const { userId, name, stats } = req.body;

	try {
		// Create a new character in the database
		const newCharacter = await prisma.character.create({
			data: {
				name,
				stats,
			},
		});

		res.status(201).send({
			message: 'Character created successfully!',
			character: newCharacter,
		});
	} catch (error) {
		console.error('Error creating character:', error);
		res.status(500).send({
			message: 'Failed to create character',
			error: error.message,
		});
	}
});

module.exports = router;
