import bcrypt from 'bcrypt';
import User from '../models/userSchematic.js';

export const userSignUpController = async (req, res) => {
  const { userId, password, confirmPassword } = req.body;

  // check if the email already registerd
  const isUserExist = await User.exists({ userId });
  if (isUserExist) {
    return res.status(400).json({ errors: ['The email already exists'] });
  }

  // confirm the password
  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ errors: ['Please check the password again'] });
  }

  // user에 userId(email), password 할당
  await User.create({
    userId: userId,
    userPassword: password,
    groupId: [],
    courseId: [],
    notes: new Map(),
  });

  res.send('User created');
};

export const userLogInController = (req, res) => {};
