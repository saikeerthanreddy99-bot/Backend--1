// Import HTTP module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Home page
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to Home Page</h1>');
    }

    // About page
   else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h2>Name: Saikeerthan Reddy</h2>
        <h2>Section: CSE-2A</h2>
    `);
}

    // Time page
    else if (req.url === '/time') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Current Time: ${new Date()}</h1>`);
    }

    // Error page
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});