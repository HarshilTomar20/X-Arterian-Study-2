const fs = require('fs');
// FS : 1. Provides an API for interacting with the file system, allowing you to read, write, and manipulate files. 2. Commonly used for file operations like reading files, writing files, and watching for changes.

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});