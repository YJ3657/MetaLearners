import { mongoose, Schema } from 'mongoose';

const notesSchema = new Schema({
  userId: { type: String, required: true },
  courseId: { type: String, required: true },
  contents: { type: String, required: true },
  chapterNo: { type: Number, required: true },
  title: { type: String, required: true },
});

const Notes = mongoose.model('Notes', notesSchema);

export default Notes;
