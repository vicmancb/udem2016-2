/**
 * Created by vicman on 10/14/16.
 */
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/app')).listen(8080);