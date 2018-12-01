const http = require('http');

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.write('Hello World!');
    res.end();
  })
  .listen(5000);

console.log(`Server listening on port ${port}`);
