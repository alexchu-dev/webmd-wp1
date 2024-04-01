import mongoose from "mongoose"

const JournalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title for this journal."],
    maxlength: [60, "Title cannot be more than 60 characters"],
  },
  slug: String,
  destination: {
    type: String,
    required: [true, "Please provide a destination for this journal."],
  },
  image: {
    type: String,
    required: [true, "Please provide the url of the image."],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

export default mongoose.models.Journal ||
  mongoose.model("Journal", JournalSchema)
