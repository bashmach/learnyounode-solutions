'use strict';

const http = require('http');

module.exports = function(url, resolve, reject) {
  http.get(url, function(response) {
    let content = '';

    response.setEncoding('utf-8');

    response.on('data', function(data) {
      content += data;
    });
    response.on('error', function(e) {
      reject(e);
    });
    response.on('end', function(e) {
      resolve(content);
    });
  }).on('error', function(e) {
    reject(e);
  })
}