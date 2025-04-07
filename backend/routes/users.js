const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = require('../middleware/auth');

const generateToken = (user) => {
	return jwt.sign(
		{ id: user.id, username: user.username, email: user.email },
		process.env.JWT_SECRET,
		{ expiresIn: '5h' }
	);
};

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

router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await prisma.user.findUnique({
			where: { email: email },
		});

		if (!user) {
			return res.status(404).send({
				message: 'User not found',
			});
		} else {
			passwordMatch = await bcrypt.compare(password, user.password);
			if (!passwordMatch) {
				return res.status(401).send({
					message: 'Invalid credentials',
				});
			}

			const token = generateToken(user);

			const cookieOptions = {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
				sameSite: 'strict',
				maxAge: 5 * 60 * 60 * 1000, // 5 hours
			};

			res.cookie('token', token, cookieOptions).status(200).send({
				message: 'Login successful',
			});
		}
	} catch (error) {
		console.error('Error logging in:', error);
		res.status(500).send({
			message: 'Failed to log in',
			error: error.message,
		});
	}
});

router.use(authenticateToken);

router.get('/temp', async (req, res) => {
	console.log(`This is a temp route so auth doesn't apply to everything`);
	return res.status(200).send({
		message: `This is a temp route so auth doesn't apply to everything`,
	});
});

module.exports = router;
