import bcrypt from 'bcrypt';
import User from '../models/userSchema.js';

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

  // save userId and password received from reqest body
  await User.create({
    userId: userId,
    userPassword: password,
    groupId: [],
    courseId: [],
    notes: new Map(),
  });

  res.send('User created');
};

export const userLogInController = async (req, res) => {
  const { userId, password } = req.body;

  const user = await User.findOne({ userId });
  if (!user) {
    req.flash('error', 'No Account Exists');
    return res.status(400).json({ errors: 'No account exists' });
  }

  if (!(user.password === password)) {
    req.flash('error', 'incorrect password');
    return res.status(400).json({ errors: 'Incorrect password' });
  }

  // On success, store the info in session and redirect to the main('/') page.
  // Not yet checked if it works on postman
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect('/');
};
