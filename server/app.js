import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import cors from 'cors';
import connectDB from './db/connection/conn.js';
import mongoose from 'mongoose';
// import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import authRoutes from './routes/index.js';
// import { homeRoute } from './routes/lib/index.js';
import cookieParser from 'cookie-parser';
import YAML from 'yamljs';
const swaggerDocument = YAML.load('./api.yaml');
connectDB();
const app = express();
// require('crypto').randomBytes(64).toString('hex');
// Swagger Docs integeratin

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// middleware setup
app.use(json());
app.use(cors());
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);
// app.use('/api/', homeRoute);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, (err) => {
    if (err) {
      console.log(`error in running the server: ${err}`);
    }
    console.log(`server is running on port: ${process.env.PORT}`);
  });
});
