import mongoose from "mongoose"
import DestinationSequence from "./DestinationSequence"

const DestinationSchema = new mongoose.Schema({
  dest_id: {
    type: Number,
  },
  name: {
    type: String,
    required: [true],
  },
  slug: {
    type: String,
    required: [true],
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
  content: {
    desc: {
      type: String,
    },
  },
})

DestinationSchema.pre("save", async function () {
  if (this.isNew) {
    try {
      const seq = await DestinationSequence.findByIdAndUpdate(
        "dest_id",
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      )
      this.dest_id = seq.seq
      console.log("DestinationSequence ", this.dest_id)
    } catch (error) {
      throw error
    }
  }
})

export default mongoose.models.Destination ||
  mongoose.model("Destination", DestinationSchema)
