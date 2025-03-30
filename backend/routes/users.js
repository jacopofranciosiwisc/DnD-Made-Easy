const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
	const { email, password } = req.body;
	try {
		const newUser = await prisma.user.create({
			data: {
				email,
				password,
			},
		});

		res.status(201).send({
			message: 'User created successfully!',
			data: newUser.data.email,
		});
	} catch (error) {
		console.log(`Error creating user ${newUser.data.email}:`, error);
		res.status(500).send({
			message: `Failed to create user ${newUser.data.email}`,
			error: error.message,
		});
	}
	res
		.status(201)
		.send({ message: `User ${newUser.data.email} created successfully!` });
});

module.exports = router;
