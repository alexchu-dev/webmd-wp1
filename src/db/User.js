import mongoose from "mongoose"
import UserSequence from "./UserSequence";

const UserSchema = new mongoose.Schema({
  user_id: {
    type: Number
  },
  name: {
    type: String,
    required: [true, "Please provide a name for this user."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide an email for this user."],
  },
  password: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
    default: "/img/avatar.jpg",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  provider: {
    type: String,
    required: true,
    default: "credentials",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// UserSchema.pre(
//   "validate", function (next) {
//     console.log("Pre Validate")
//     next()
//   }
// )

UserSchema.pre('save', async function () {
  if (this.isNew) {
    try {
      const seq = await UserSequence.findByIdAndUpdate('user_id', { $inc: { seq: 1 } }, { new: true, upsert: true });
      this.user_id = seq.seq;
      console.log("UserSequence ", this.user_id);
    } catch (error) {
      throw error;
    }
  }
});

export default mongoose.models.User || mongoose.model("User", UserSchema)
