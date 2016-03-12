'use strict';

const fs = require('fs');
const path = require('path');

let directory = process.argv[2];
let ext = process.argv[3];

function readDir(path, callback) {
  fs.readdir(path, callback)
}

function filterFiles(e, files) {
  let filteredFiles;

  filteredFiles = files.filter(function(filename) {
    return path.extname(filename) === ('.' + ext);
  });

  filteredFiles.forEach(function(file, key) {
    console.log(file);
  })
}

readDir(directory, filterFiles);