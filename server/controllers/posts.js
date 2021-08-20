import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, img, athletes, events, predictions, results, end, deadline } = req.body;
    const newPostMessage = new PostMessage({ title, message, img, athletes, events, predictions, end, deadline, results  })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    // const { id } = req.params;
    const { title, message, img, athletes, events, predictions, results, end, deadline, _id } = req.body;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with that id ${_id}`);

    const updatedPost = {title, message, img, athletes, events, predictions, results, end, deadline, _id: _id };
    await PostMessage.findByIdAndUpdate(_id, updatedPost , {new: true});

    res.json(updatedPost);
}
export default router;