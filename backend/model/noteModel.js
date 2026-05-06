import mongoose from "mongoose";
import { type } from "os";

// schema o esquema 

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})
const Note = new mongoose.model('Note', noteSchema)

export default Note 