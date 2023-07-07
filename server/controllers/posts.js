import mongoose from "mongoose";

// gives us access to a real model
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        // find inside a model
        const postMessages = await PostMessage.find().sort({ createdAt: -1 }).allowDiskUse();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()});
    console.log('CREATE POST');
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err });
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    console.log('UPDATE');
    // ensures that id is valid/exists
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id, createdAt: new Date().toISOString() }, { new: true });
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await PostMessage.findByIdAndRemove(id);
    console.log('DELETE');
    res.json({ message: 'Post successfully deleted.' });
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    console.log('LIKED POST');
    // confirm that user is authenticated using req.userId
    if (!req.userId) return res.json({ message: 'Unauthenticated '});
    // check for the post
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    // actual post
    const post = await PostMessage.findById(id);
    // each like is an ID from a specific person
    const index = post.likes.findIndex((id) => id === String(req.userId));
    // if id is not in likes, then index = -1
    if (index === -1) {
        // add like
        post.likes.push(req.userId);
    } else {
        // remove like
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true } );
    res.status(200).json(updatedPost);
}
