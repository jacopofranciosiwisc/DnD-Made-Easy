const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
	// Look for the token in cookies
	const token = req.cookies.token;
	if (!token) {
		return res
			.status(401)
			.send({ message: 'Access denied: no token provided' });
	}
	try {
		const verified = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).send({ message: 'Invalid token' });
	}
};

module.exports = authenticateToken;
