// Heroku dev uses ssl via load balancer, so until we have production server, this ssl spec is not required
// var path = require('path');
// var fs = require("fs");
// exports.privateKey = fs.readFileSync(path.join(__dirname, process.env.SSL_PRIVATEKEY)).toString();
// exports.certificate = fs.readFileSync(path.join(__dirname, process.env.SSL_CERTIFICATE)).toString();