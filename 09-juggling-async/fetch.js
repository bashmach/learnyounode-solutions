'use strict';

const http = require('http');

module.exports = function(url, callback) {
  http.get(url, function(response) {
    let content = '';

    response.setEncoding('utf-8');

    response.on('data', function(data) {
      content += data;
    });
    response.on('error', function(e) {
      throw e;
    });
    response.on('end', function(e) {
      callback(content);
    });
  });
}