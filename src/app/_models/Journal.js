import mongoose from "mongoose"

const JournalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for this journal."],
    maxlength: [60, "Title cannot be more than 60 characters"],
  },
  content: {
    type: String,
    required: [true, "Please provide content for this journal."],
  },
})

export default mongoose.models.Journal || mongoose.model("Journal", JournalSchema)