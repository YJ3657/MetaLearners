import { mongoose, Schema } from 'mongoose';

const studentSchema = new Schema({
  studentId: { type: String, required: true },
  timeEnrolled: { type: String, required: true },
  courseId: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
