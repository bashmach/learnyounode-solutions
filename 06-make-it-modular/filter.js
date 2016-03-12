'use strict';

const fs = require('fs');
const path = require('path');

function filterFiles(files, ext) {
  return files.filter(function(filename) {
    return path.extname(filename) === ('.' + ext);
  });
}

module.exports = function(path, ext, callback) {
  fs.readdir(path, function(e, files) {
    if (e) {
      return callback(e);
    }

    callback(null, filterFiles(files, ext));
  })
}