const http = require('http');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;

    // Set the response header
    res.setHeader('Content-Type', 'application/json');

    // Handle different routes and methods
    if (parsedUrl.pathname === '/api/data') {
        switch (method) {
            case 'GET':
                res.statusCode = 200;
                res.end(JSON.stringify({ message: 'GET request received' }));
                break;

            case 'POST':
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString(); // Convert Buffer to string
                });
                req.on('end', () => {
                    res.statusCode = 201;
                    res.end(JSON.stringify({ message: 'POST request received', data: JSON.parse(body) }));
                });
                break;

            case 'PUT':
                let updateBody = '';
                req.on('data', chunk => {
                    updateBody += chunk.toString();
                });
                req.on('end', () => {
                    res.statusCode = 200;
                    res.end(JSON.stringify({ message: 'PUT request received', data: JSON.parse(updateBody) }));
                });
                break;

            case 'DELETE':
                res.statusCode = 200;
                res.end(JSON.stringify({ message: 'DELETE request received' }));
                break;

            default:
                res.statusCode = 405;
                res.end(JSON.stringify({ message: 'Method not allowed' }));
                break;
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});