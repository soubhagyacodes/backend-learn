import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
   },
   password: {
      type: String,
      required: true,
      unique: true
   },
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true

   },
   primeSubscriber: {
      type: Boolean,
      default: false
   },

}, { timestamps: true })


export const User = mongoose.model("User", userSchema) // Table name saved as user and 's' attached at the end in the data base




