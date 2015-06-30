var CalendarView = require("../../src/views/calendar_view");

describe("calendar view", function () {
  it("creates a week for each week of the month", function () {
    var date = new Date(2015, 5, 17);
    var calendarView = new CalendarView(date);

    var weeks = calendarView.getWeeks();
    expect(weeks.length).toBe(5);
    expect(weeks[0].days).toEqual([
      {dayOfMonth: 31},
      {dayOfMonth: 1},
      {dayOfMonth: 2},
      {dayOfMonth: 3},
      {dayOfMonth: 4},
      {dayOfMonth: 5},
      {dayOfMonth: 6},
    ]);

    expect(weeks[4].days).toEqual([
      {dayOfMonth: 28},
      {dayOfMonth: 29},
      {dayOfMonth: 30},
      {dayOfMonth: 1},
      {dayOfMonth: 2},
      {dayOfMonth: 3},
      {dayOfMonth: 4},
    ]);
  });
});
