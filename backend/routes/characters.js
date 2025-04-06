const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
	const { name, stats } = req.body;

	try {
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

router.get('/', async (req, res) => {
	res.send("We'll grab the characters from here");
});

module.exports = router;
