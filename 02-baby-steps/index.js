'use strict';

let args = process.argv;

let sum = 0;

args.forEach(function(arg, key) {
  let num = Number(arg);

  if (!isNaN(num)) {
    sum += num;
  }

});

console.log(sum);