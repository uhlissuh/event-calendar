var server = require("./server");
var port = 8080;

server.listen(port, function () {
  console.log("listening on port " + port);
});
