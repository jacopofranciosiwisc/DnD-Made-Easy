// Import required modules
const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a basic route
app.get('/', (req, res) => {
	res.send('Welcome to the D&D Combat System Backend!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

const userRoutes = require('./routes/users');
const characterRoutes = require('./routes/characters');
const combatRoutes = require('./routes/combat');

app.use('/api/users', userRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/combat', combatRoutes);
