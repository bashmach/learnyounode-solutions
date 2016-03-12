'use strict';

let fs = require('fs');

function readFile(callback) {
  return fs.readFile(process.argv[2], callback);
}

function countLines(e, fileContents) {
  if (e) {
    throw e;
  }

  let lines = fileContents.toString().split("\n").length - 1;

  console.log(lines);
}

readFile(countLines);
