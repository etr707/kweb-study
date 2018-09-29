const http = require('http');
const cal1 = require('./cal1');
const cal2 = require('./cal2');
const cal3 = require('./cal3');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`2 + 2 = ${cal1.add(2,2)}\n` +
          `5 - 3 = ${cal2.sub(5,3)}\n` +
          `6 * 7 = ${cal3.mul(6,7)}\n` +
          `20 % 6 = ${cal3.mod(20,6)}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//kweb study project