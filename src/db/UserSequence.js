import mongoose from "mongoose"

const UserSequenceSchema = new mongoose.Schema({
  _id: String,
  seq: {
    type: Number,
    default: 0,
  },
})

const UserSequence = mongoose.models.UserSequence || mongoose.model("UserSequence", UserSequenceSchema)

async function initializeUserSequence() {
  const seq = await UserSequence.findById("user_id")
  if (!seq) {
    await UserSequence.create({ _id: "user_id", seq: 0 })
  }
}

export { UserSequence, initializeUserSequence }