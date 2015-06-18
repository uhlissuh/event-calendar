var http = require("http");
var server = require("../src/server");

describe("the server", function() {
  beforeEach(function(done) {
    server.listen(8081, done)
  });

  afterEach(function(done) {
    server.close(done);
  });

  it("works", function(done) {
    http.request({
      host:"localhost",
      port: "8081",
      path: "/"
    },
    function (response) {
      var body = "";

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {
        expect(body).toMatch(/June/);
        done();
      });
    }).end();
  });
});
