import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  userId: { type: String, required: true },
  userPassword: {type: String, required: true},
  groupId: {type: Array},
  courseId: {type:Array},
  notes: {type: Map}
});

const User = mongoose.model('User', userSchema);

export default User;