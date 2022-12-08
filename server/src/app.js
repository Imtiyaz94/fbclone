import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import cors from 'cors';
import connectDB from './config/conn.js';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';
connectDB();
const app = express();

// middleware setup
app.use(cookieParser());
app.use(cors());
app.use(json());

// routes
app.use('/api/auth', authRoutes);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, (err) => {
    if (err) {
      console.log(`error in running the server: ${err}`);
    }
    console.log(`server is running on port: ${process.env.PORT}`);
  });
});
