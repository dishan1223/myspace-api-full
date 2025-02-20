// Dot ENV config
import dotenv from 'dotenv';
dotenv.config();

// Dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Database connection
import connectDB from './db/db.js';

// Import Routes

// initiate app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MONGO DB
connectDB();


// set routes


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
