import { mongoose, Schema } from 'mongoose';

const questionSchema = new Schema({
  chapterNo: { type: Number, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  courseId: { type: String, required: true },
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
