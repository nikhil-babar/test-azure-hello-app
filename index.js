const http = require('http')
const port = 80;

const server = http.createServer(function (request, response) {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.end("<html><body><h1>Hello nikhil babar</h1></body></html>");
})

server.listen(port);

console.log("Server running on port 3000");
