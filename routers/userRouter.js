import express from 'express';
import {
  userSignUpController,
  userLogInController,
} from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/signup', userSignUpController);

userRouter.post('/login', userLogInController);

export default userRouter;
