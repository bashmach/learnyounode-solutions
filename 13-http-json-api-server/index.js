'use strict';

const moment = require('moment');
const http = require('http');
const url = require('url');

const port = Number(process.argv[2]);

function unixtime(iso) {
  let date = new Date(iso);

  return {
    "unixtime": date.getTime()
  };
}

function parsetime(iso) {
  let date = moment(new Date(iso));

  return {
    "hour": date.hour(),
    "minute": date.minute(),
    "second": date.second()
  };
}

http.createServer(function(request, response) {
  if (request.method != 'GET') {
    response.writeHead(405, {'Content-Type': 'text/plain'});
  }

  let urlParams = url.parse(request.url, true);

  switch (urlParams.pathname) {
    case '/api/unixtime':
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(unixtime(urlParams.query.iso)));

      break;
    case '/api/parsetime':
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify(parsetime(urlParams.query.iso)));

      break;
    default:
      response.writeHead(404, {'Content-Type': 'text/plain'});
      break;
  }

  response.end();

}).listen(port);