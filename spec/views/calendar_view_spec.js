var CalendarView = require("../../src/views/calendar_view");


describe("calendar view", function () {
  it("creates a week for each week of the month", function () {
    var date = new Date(2015, 5, 17);
    var calendarView = new CalendarView(date);

    console.log("calendarView.x", calendarView.x);

    var weeks = calendarView.getWeeks();
    expect(weeks.length).toBe(5);
    expect(weeks[0].days[0].number).toBe(31);
  });
});
