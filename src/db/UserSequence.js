import mongoose from "mongoose";

const UserSequenceSchema = new mongoose.Schema({
    _id: String,
    seq: {
        type: Number,
        default: 0
    }
  })

  // const UserSequence = mongoose.model('UserSequence', UserSequenceSchema);

  // const seq = await UserSequence.findById('user_id');
  // if (!seq) {
  //   await UserSequence.create({ _id: 'user_id', seq: 0 });
  // }

  
export default mongoose.models.UserSequence || mongoose.model("UserSequence", UserSequenceSchema)