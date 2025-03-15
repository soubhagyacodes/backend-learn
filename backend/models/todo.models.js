import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content:{
		type: String,
		required: true
	},
	subtodos: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "SubTodo"
		}
	],
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	completed: {
		type: Boolean,
		default: false
	}

}, { timestamps: true })


export const Todo = mongoose.model("Todo", todoSchema)