function CalendarView(date) {
  this.date = date
}

CalendarView.prototype.getWeeks = function() {
  return [
    1,
    2,
    3,
    4,
    5
  ]
};

module.exports = CalendarView;
