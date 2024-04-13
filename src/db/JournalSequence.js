import mongoose from "mongoose";

const JournalSequenceSchema = new mongoose.Schema({
    _id: String,
    seq: {
        type: Number,
        default: 0
    }
  })

  // const JournalSequence = mongoose.model('JournalSequence', JournalSequenceSchema);

  // const seq = await JournalSequence.findById('post_id');
  // if (!seq) {
  //   await JournalSequence.create({ _id: 'post_id', seq: 0 });
  // }

export default mongoose.models.JournalSequence || mongoose.model("JournalSequence", JournalSequenceSchema)