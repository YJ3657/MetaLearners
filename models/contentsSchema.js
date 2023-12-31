import { mongoose, Schema } from 'mongoose';

const contentsSchema = new Schema({
  chatperNo: { type: Number, required: true },
  content: { type: String, required: true },
  courseId: { type: String, required: true },
});

const Contents = mongoose.model('Contents', contentsSchema);

export default Contents;
