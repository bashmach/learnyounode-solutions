'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const port = process.argv[2];
const filepath = process.argv[3];

http.createServer(function(request, response) {
  fs.createReadStream(filepath).pipe(response);

  response.writeHead(200, {'Content-Type': 'text/plain'});
}).listen(port);