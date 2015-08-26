var CalendarView = require("../../src/views/calendar_view");

describe("calendar view", function () {
  it("creates a week for each week of the month", function () {
    var date = new Date(2015, 5, 17);
    var calendarView = new CalendarView(date, []);

    var weeks = calendarView.getWeeks();
    expect(weeks.length).toBe(5);
    expect(weeks[0].days).toEqual([
      {dayOfMonth: 31, events: []},
      {dayOfMonth: 1, events: []},
      {dayOfMonth: 2, events: []},
      {dayOfMonth: 3, events: []},
      {dayOfMonth: 4, events: []},
      {dayOfMonth: 5, events: []},
      {dayOfMonth: 6, events: []},
    ]);

    expect(weeks[4].days).toEqual([
      {dayOfMonth: 28, events: []},
      {dayOfMonth: 29, events: []},
      {dayOfMonth: 30, events: []},
      {dayOfMonth: 1, events: []},
      {dayOfMonth: 2, events: []},
      {dayOfMonth: 3, events: []},
      {dayOfMonth: 4, events: []},
    ]);
  });
});
