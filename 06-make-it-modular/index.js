'use strict';

let directory = process.argv[2];
let ext = process.argv[3];
let filter = require('./filter');

filter(directory, ext, function (e, files) {
  if (e) {
    throw e;
  } else {
    files.forEach(function (file) {
      console.log(file);
    });
  }
})