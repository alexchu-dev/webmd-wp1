import mongoose from "mongoose";

const DestinationSequenceSchema = new mongoose.Schema({
    _id: String,
    seq: {
        type: Number,
        default: 0
    }
  })

  const DestinationSequence = mongoose.models.DestinationSequence || mongoose.model("DestinationSequence", DestinationSequenceSchema)

  async function initializeDestinationSequence() {
    const seq = await DestinationSequence.findById("dest_id")
    if (!seq) {
      await DestinationSequence.create({ _id: "dest_id", seq: 0 })
    }
  }
  
export { DestinationSequence, initializeDestinationSequence}