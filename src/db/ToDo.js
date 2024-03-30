import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema(
  {
    title: String,
    task: String
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.ToDo || mongoose.model("ToDo", ToDoSchema);