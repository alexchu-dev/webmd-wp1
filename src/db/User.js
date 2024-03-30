import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
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
    required: [true, "Please provide a password for this user."],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.User || mongoose.model("User", UserSchema)