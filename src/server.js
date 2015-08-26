var http = require("http");
var fs = require("fs");
var mustache = require("mustache");
var CalendarView = require("./views/calendar_view");
var express = require("express");
var bodyParser = require("body-parser");
var events = require("./models/events");

var app = express();

app.use(bodyParser.urlencoded());

app.post("/events", function(req, res) {
  events.createEvent(req.body, function(err) {
    res.end("ok");
  });
});

app.get("/", function (req, res) {
  var date = new Date();
  events.getEventsInMonth(date, function(err, result) {
    var calendarView = new CalendarView(date, result);
    var month = date.toLocaleString("en-us", { month: "long" });

    res.end(
      mustache.render(
        fs.readFileSync("./src/templates/index.html.ms", "utf8"),
        {
          "month": month,
          "weeks": calendarView.getWeeks()
        }
      )
    );
  });
});

app.get("/static*", function(req, res) {
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
});

var server = http.createServer(app);

module.exports = server;
