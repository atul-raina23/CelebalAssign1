
const http = require('http');


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000, '127.0.0.1', () => {
  console.log('Node.js server is running at http://127.0.0.1:3000/');
});
