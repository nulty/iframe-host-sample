const http = require('http');
const fs = require('fs')

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((_req, res) => {
    // Set a response type of plain text for the response
  fs.readFile("./iframe.html", "UTF-8", function(_err, html) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send back a response and end the connection
    res.end(html);
  })
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('iFrame server running on port 3000');

