'use strict';

const http = require('http');

http.get(process.argv[2], function(response) {
  let content = '';

  response.setEncoding('utf-8');

  response.on('data', function(data) {
    content += data;
  });
  response.on('error', function(e) {
    throw e;
  });
  response.on('end', function(e) {
    console.log(content.length);
    console.log(content);
  });
});