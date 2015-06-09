var http = require("http");

var port = 8080;

function handleRequest(req, res) {
 res.end("welcome to sleep");
}

var server = http.createServer(handleRequest);

server.listen(port, function () {
  console.log("listening on port " + port);
})
