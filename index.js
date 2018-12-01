var http = require('http');

var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(5000);

console.log('Server listening on port '+ port);

