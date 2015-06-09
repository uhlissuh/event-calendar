var http = require("http");


function handleRequest(req, res) {
 res.end("welcome to sleep");
}

var server = http.createServer(handleRequest);

module.exports = server;
