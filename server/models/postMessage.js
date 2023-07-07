import mongoose from "mongoose";

// a schema defines the structure of the document
const postSchema = mongoose.Schema({
    description: String,
    location: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    name: String,
    creator: String,
    selectedFile: String,
    likes: {
        // array of IDs
        type: [String],
        default: []
    }
});

// turn schema into model
const PostMessage = mongoose.model('PostMessage', postSchema);

// on this mongoose model, we will be able to run commands such as find, create, delete, update
export default PostMessage;