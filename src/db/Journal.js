import mongoose from "mongoose"
import JournalSequence from "./JournalSequence"

const JournalSchema = new mongoose.Schema({
  post_id: {
    type: Number
  },
  title: {
    type: String,
    required: [true, "Please provide a title for this journal."],
    maxlength: [60, "Title cannot be more than 60 characters"],
  },
  slug: {
    type: String,
    required: [true, "Please provide a slug for this journal."],
  },
  destination: {
    type: String,
    required: [true, "Please provide a destination for this journal."],
  },
  image: {
    url: {
      type: String,
      required: [true, "Please provide the URL of the image."],
    },
    alt: {
      type: String,
      required: [true, "Please provide an alt text for the image."],
    },
  },
  user_id: {
    type: Number,
    required: true,
  },
  date: { type: Date, default: Date.now },
  excerpt: {
    type: String,
    required: [true, "Please provide an excerpt for this journal."],
  },
  content: {
    type: String,
    required: [true, "Please provide content for this journal."],
  },
})

JournalSchema.pre('save', async function () {
  if (this.isNew) {
    try {
      const seq = await JournalSequence.findByIdAndUpdate('post_id', { $inc: { seq: 1 } }, { new: true, upsert: true });
      this.post_id = seq.seq;
      console.log("JournalSequence ", this.user_id);
    } catch (error) {
      throw error;
    }
  }
});

export default mongoose.models.Journal ||
  mongoose.model("Journal", JournalSchema)
