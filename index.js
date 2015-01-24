var http = require('http');
var parse = require('url').parse;
var handleRequest = function (req, res) {
  const defaultValue = 'world';
  var query = parse(req.url, true).query;
  var name = query.name || defaultValue;

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello ${name}\n`);
};


http.createServer(handleRequest).listen(8080, '0.0.0.0');

console.log('Server running at http://0.0.0.0:8080/');
