'use strict';

const fetch = require('./fetch');

let callbacks = [];

let urls = process.argv.filter(function(url, key) {
  return key > 1;
});

function reject(e) {
  throw e;
}

function resolve(key, data) {
  callbacks.push({
    key,
    content: data
  })

  if (callbacks.length === urls.length) {
    print();
  }
}

function print() {
  callbacks
    .sort(function(a, b) {
      return a.key > b.key;
    })
    .forEach(function(item) {
      console.log(item.content);
    })
}

urls.forEach(function(url, key) {
  try {
    fetch(url, function(data) {
      resolve(key, data)
    });
  } catch (e) {
    reject(e);
  }
});