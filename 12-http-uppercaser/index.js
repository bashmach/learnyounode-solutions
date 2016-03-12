'use strict';

const fs = require('fs');
const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);

http.createServer(function(request, response) {
  if (request.method != 'POST') {
    response.writeHead(405, {'Content-Type': 'text/plain'});

    return response.end();
  }

  response.writeHead(200, {'Content-Type': 'text/plain'});

  request.pipe(map(function (chunk) {
    return chunk.toString('utf-8').toUpperCase()
  })).pipe(response);

}).listen(port);