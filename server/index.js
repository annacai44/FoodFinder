import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

// set up bodyParser to properly send our requests
// app.use allows us to use any middleware we want
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// if the URL has /posts at the end, it will go into postRoutes
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

// cluster acts as online cloud database
const PORT = process.env.PORT || 5010;

mongoose.connect(process.env.CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log({ message: error.message }));