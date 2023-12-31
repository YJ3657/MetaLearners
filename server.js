import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routers/userRouter.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {});