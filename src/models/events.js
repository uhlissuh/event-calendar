var pg = require('pg');
var conString = "postgres://alissa:@localhost/event_calendar";

exports.createEvent = function(data, callback) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      callback(err);
      return;
    }

    client.query(
      "insert into events (name, time, location, description) values ($1, $2, $3, $4)",
      [data.name, data.time, data.location, data.description],
      function(err, result) {
        done();
        callback(err);
      }
    );
  });
}

exports.getEventsInMonth = function(date, callback) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      callback(err);
      return;
    }

    var firstOfMonth = new Date(date);
    firstOfMonth.setDate(1);
    var firstOfNextMonth = new Date(firstOfMonth);
    firstOfNextMonth.setMonth(firstOfMonth.getMonth() + 1);

    client.query(
      "select * from events where time >= $1 and time < $2",
      [firstOfMonth, firstOfNextMonth],
      function(err, result) {
        done();
        callback(err, result.rows);
      }
    );
  });
}

exports.deleteAllEvents = function(callback) {
  pg.connect(conString, function(err, client, done) {
    if (err) {
      callback(err);
      return;
    }

    client.query(
      "delete from events",
      function(err, result) {
        done();
        callback(err, result);
      }
    )
  })
}
