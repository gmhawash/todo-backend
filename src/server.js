#!/usr/bin/env node

const app = require('./app');
const debug = require('debug')('todo-backend:server');
const http = require('http');
const dao = require('./dao/dao');

const dbfile = process.env.DBFILE || require('path').join(__dirname, 'task.db');
const conf = {
    filename: dbfile
};

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges'); // eslint-disable-line no-console
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use'); // eslint-disable-line no-console
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

var server = http.createServer(app);
dao.initialize(conf)
    .then(() => {
        server.listen(port);
        server.on('error', onError);
        server.on('listening', onListening);
    })
    .catch((err) => {
        throw(err);
    });