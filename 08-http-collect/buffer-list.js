'use strict';

const http = require('http');
const bl = require('bl');

let collectBuffer = bl(function(e, data) {
  if (e) {
    throw e;
  }

  let bufferContent = data.toString('utf-8');

  console.log(bufferContent.length);
  console.log(bufferContent);
});


http.get(process.argv[2], function(response) {
  response.pipe(collectBuffer);
});