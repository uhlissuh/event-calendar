var http = require("http");

describe("the server", function() {
  it("works", function(done) {
    http.request({
      host:"localhost",
      port: "8080",
      path: "/"
    },
    function (response) {
      var body = "";

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {
        expect(body).toBe("welcome to sleep");
        done();
      });
    }).end();
  });
});
