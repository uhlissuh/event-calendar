var http = require("http");
var fs = require("fs");
var mustache = require("mustache");
var CalendarView = require("./views/calendar_view");
var express = require("express");
var bodyParser = require("body-parser");
var pg = require('pg');
var conString = "postgres://alissa:@localhost/event_calendar";



var app = express();

app.use(bodyParser.urlencoded());

app.post("/events", function(req, res) {


  console.log(req.body);

  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error("error fetching client from pool", err);
    }
    console.log("ok");

    client.query(
      "insert into events (name, time, location, description) values ($1, $2, $3, $4)",
      [req.body.name, req.body.time, req.body.location, req.body.description],
      function(err, result) {
        console.log(err, result);
        res.end("ok");
        done();
      }
    );
  });
});

app.get("/", function (req, res) {
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
