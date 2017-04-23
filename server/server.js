'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var http = require('http');
var https = require('https');
var sslConfig = require('./ssl-config');
var path = require('path');
console.log('ENV', process.env.NODE_ENV);

var app = module.exports = loopback();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.start = function(httpOnly) {
    // start the web server
    if (httpOnly === undefined) {
        httpOnly = process.env.HTTP;
    }
    var server = null;
    if (!httpOnly && sslConfig.privateKey) {
        var options = {
            key: sslConfig.privateKey,
            cert: sslConfig.certificate
        };
        server = https.createServer(options, app);
    } else {
        server = http.createServer(app);
    }

    return server.listen(app.get('port'), function() {
        var baseUrl = (httpOnly || !sslConfig.privateKey ? 'http://' : 'https://') + app.get('host') + ':' + app.get('port');
        app.emit('started', baseUrl);
        console.log('Web server listening at: %s%s', baseUrl, '/');
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
