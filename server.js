const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const breakfastRoutes = require('./routes/breakfastRoutes');
const lunchRoutes = require('./routes/lunchRoutes');
const dinnerRoutes = require('./routes/dinnerRoutes');
const memberRoutes = require('./routes/memberRoutes');
const headerImageRoutes = require('./routes/headerImageRoute');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(
	cors({
		origin: ['https://figmabackend.onrender.com', 'http://localhost:5000'],
		credentials: true,
	})
);

// Mount routers
app.use('/api/breakfast', breakfastRoutes);
app.use('/api/lunch', lunchRoutes);
app.use('/api/dinner', dinnerRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/headerimages', headerImageRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
	res.send('API is running...');
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port http://localhost:${PORT}`
	)
);
