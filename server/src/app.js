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
app.use(json());
app.use(cors());
app.use(cookieParser());

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
