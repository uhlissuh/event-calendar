var http = require("http");
var fs = require("fs");


function handleRequest(req, res) {
 res.end(fs.readFileSync("./src/templates/index.html", "utf8"));
}

var server = http.createServer(handleRequest);

module.exports = server;
