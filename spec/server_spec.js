var http = require("http");
var server = require("../src/server");
var queryString = require("querystring");

describe("the server", function() {
  beforeEach(function(done) {
    server.listen(8081, done)
  });

  afterEach(function(done) {
    server.close(done);
  });

  it("works", function(done) {
    loadMainPage(function(body) {
      expect(body).toMatch(/August/);
      done();
    });
  });

  it("displays events that the user creates on the calendar", function(done) {
    var req = http.request({
      host:"localhost",
      port: "8081",
      path: "/events",
      method: "POST",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    },
    function() {
      loadMainPage(function(body) {
        expect(body).toMatch(/tomatofest/);
        done();
      })
    });

    req.write(queryString.stringify({
      name: "tomatofest",
      time: "08/27/2015",
      location: "fieldbrook",
      description: "we will celebrate tomatoes"
    }));

    req.end();
  });

});

function loadMainPage(callback) {
  http.request({
    host:"localhost",
    port: "8081",
    path: "/"
  },
  function(response) {
    var body = "";

    response.on('data', function (chunk) {
      body += chunk;
    });

    response.on('end', function () {
      callback(body);
    });
  }).end();
}
