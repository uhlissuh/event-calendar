var http = require("http");
var fs = require("fs");
var mustache = require("mustache");


function handleRequest(req, res) {
  if (req.url.indexOf("/static") === 0) {
    try {
      res.end(fs.readFileSync(__dirname + "/.." + req.url));
    } catch (e) {
      if (e.code === "ENOENT") {
        res.writeHead(404);
        res.end();
      } else {
        throw e;
      }
    }

    return;
  }
  var date = new Date();
  var month = date.toLocaleString("en-us", { month: "long" });
  date.setDate(1);
  var startDay = date.toLocaleString("en-us", { weekday: "short"});
  res.end(
    mustache.render(
      fs.readFileSync("./src/templates/index.html.ms", "utf8"),
      {
        "month": month,
        "startDay": startDay,
        "weeks": [
          {
            "days": [
              { "number": "1" },
              { "number": "2" },
              { "number": "3" },
              { "number": "4" },
              { "number": "5" },
              { "number": "6" },
              { "number": "7" },
            ]
          },
          {
            "days": [
              { "number": "8" },
              { "number": "9" },
              { "number": "10" },
              { "number": "11" },
              { "number": "12" },
              { "number": "13" },
              { "number": "14" },
            ]
          }
        ]
      }
    )
  );
}

var server = http.createServer(handleRequest);

module.exports = server;
