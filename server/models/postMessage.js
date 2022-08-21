import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    description: String,
    location: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    name: String,
    tags: [String],
    selectedFile: String,
    likes: {
        // array of IDs
        type: [String],
        default: []
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

// on this mongoose model, we will be able to run commands such as find, create, delete, update
export default PostMessage;