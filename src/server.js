var http = require("http");
var fs = require("fs");
var mustache = require("mustache");
var CalendarView = require("./views/calendar_view");


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
  } else if(req.url === "/events") {
    res.end("ok");
  } else {
    var date = new Date();
    var calendarView = new CalendarView(date);
    var month = date.toLocaleString("en-us", { month: "long" });
    res.end(
      mustache.render(
        fs.readFileSync("./src/templates/index.html.ms", "utf8"),
        {
          "month": month,
          "weeks":calendarView.getWeeks()
        }
      )
    );
  }
}

var server = http.createServer(handleRequest);

module.exports = server;
