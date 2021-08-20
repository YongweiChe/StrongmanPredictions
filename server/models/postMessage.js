import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    img: String,
    creator: String,
    athletes: Array,
    events: Array,
    predictions: Array,
    deadline: Date,
    end: Date,
    results: Array,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;