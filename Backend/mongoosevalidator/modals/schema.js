import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [5, 'Title must be at least 5 characters long'],
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    content: {
        type: String,
        required: true,
        minlength: [20, 'Content must be at least 20 characters long']
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    category: {
        type: String,
        enum: ['Technology', 'Health', 'Finance', 'Education'],
        required: true
    }
});