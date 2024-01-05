import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routers/userRouter.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  cors({
    origin: '*',
  })
);

app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {});
