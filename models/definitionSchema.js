import { mongoose, Schema } from 'mongoose';

const defintionSchema = new Schema({
  chapterNo: { type: Number, required: true },
  word: { type: String, required: true },
  definition: { type: String, required: true },
  courseId: { type: String, required: true },
});

const Definition = mongoose.model('Definition', defintionSchema);

export default Definition;
