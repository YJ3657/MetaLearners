import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routers/userRouter.js';

const app = express();
const port = 3001

app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {});
