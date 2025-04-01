const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const newUser = await prisma.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			},
		});

		console.log('User successfully created in the database:', {
			username: newUser.username,
			email: newUser.email,
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
