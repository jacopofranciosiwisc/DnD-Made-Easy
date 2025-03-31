const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/register', async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const newUser = await prisma.user.create({
			data: {
				username,
				email,
				password,
			},
		});

		res.status(201).send({
			message: 'User created successfully!',
			data: newUser.username,
		});
	} catch (error) {
		console.error('Error creating user:', error);
		res.status(500).send({
			message: 'Failed to create user',
			error: error.message,
		});
	}
});

module.exports = router;
