import mongoose from "mongoose";

const subtodoSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   content: {
      type: String,
      required: true,
   },
   completed: {
      type: Boolean,
      default: false
   }
}, { timestamps: true })


export const SubTodo = mongoose.model("SubTodo", subtodoSchema)

