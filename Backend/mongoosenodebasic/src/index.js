import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import ArticleModel from './ArticleModel.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const mongoURI = 'your_mongodb_connection_string'; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


// Create 
app.post('/articles', async (req, res) => {
    try {
        const article = new ArticleModel(req.body);
        await article.save();
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read 
app.get('/articles', async (req, res) => {
    try {
        const articles = await ArticleModel.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read specific 
app.get('/articles/:id', async (req, res) => {
    try {
        const article = await ArticleModel.findById(req.params.id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update 
app.put('/articles/:id', async (req, res) => {
    try {
        const article = await ArticleModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete 
app.delete('/articles/:id', async (req, res) => {
    try {
        const article = await ArticleModel.findByIdAndDelete(req.params.id);
        if (!article) return res.status(404).json({ message: 'Article not found' });
        res.status(204).send(); // No content to send back
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});