const http = require('http');
const fs = require('fs')

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
  fs.readFile("./host.html", "UTF-8", function(err, html) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send back a response and end the connection
    res.end(html);
  })
});

// Start the server on port 4000
app.listen(4000, '127.0.0.1');
console.log('Host server running on port 4000');

