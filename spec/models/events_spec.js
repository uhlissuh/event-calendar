var events = require("../../src/models/events");

describe("events", function() {
  beforeEach(function(done) {
    events.deleteAllEvents(done);
  });

  describe("getEventsInMonth(date, callback)", function() {
    it("gets all the events in the same month as a given date", function(done) {
      events.createEvent(
        {
          name: "hoedown",
          time: "2015/06/15",
          location: "the barn",
          description: "barn dancing and food"
        },
        function(err) {
          expect(err).toBe(null);
          events.createEvent(
            {
              name: "hoedown part2",
              time: "2015/07/25",
              location: "the barn",
              description: "barn dancing and food"
            },
            function(err) {
              expect(err).toBe(null);
              events.getEventsInMonth(new Date(2015, 6, 1), function(err, res) {
                expect(err).toBe(null);

                expect(res.length).toBe(1);
                expect(toPlainObject(res[0])).toEqual({
                  name: "hoedown part2",
                  time: new Date(2015, 6, 25),
                  location: "the barn",
                  description: "barn dancing and food"
                });

                events.getEventsInMonth(new Date(2015, 5, 1), function(err, res) {
                  expect(err).toBe(null);

                  expect(res.length).toBe(1);
                  expect(toPlainObject(res[0])).toEqual({
                    name: "hoedown",
                    time: new Date(2015, 5, 15),
                    location: "the barn",
                    description: "barn dancing and food"
                  });

                  done();
                });
              })
            }
          );
        }
      );

    })
  })
})

function toPlainObject(object) {
  var result = {};
  var keys = Object.keys(object);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    result[key] = object[key];
  }
  return result;
}
