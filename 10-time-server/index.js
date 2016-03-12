'use strict';

const net = require('net');
const moment = require('moment');

const format = 'YYYY-MM-DD HH:mm';
const port = Number(process.argv[2]);

let server = net.createServer(function(connection) {
  connection.write(moment(new Date()).format(format));
  connection.end("\n");
});
server.listen(port);