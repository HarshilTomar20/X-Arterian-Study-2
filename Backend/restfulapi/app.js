const express = require('express');
const app = express();
const port = 3000;
// const books = require('./constant/books');
let books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { id: 6, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { id: 7, title: 'The Shining', author: 'Stephen King' },
    { id: 8, title: 'To the Lighthouse', author: 'Virginia Woolf' },
    { id: 9, title: 'The Grapes of Wrath', author: 'John Steinbeck' },
    { id: 10, title: 'The Handmaid\'s Tale', author: 'Margaret Atwood' }
];

app.use(express.json());

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Get a single book
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
});

// Create a new book
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
});

// Delete a book
app.delete('/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }
    const deletedBook = books.splice(index, 1)[0];
    res.json(deletedBook);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});