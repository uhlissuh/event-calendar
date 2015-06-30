function CalendarView(date) {
  this.date = date;
}

CalendarView.prototype.getWeeks = function() {
  var date = new Date(this.date);
  date.setDate(1);
  var dayOfWeek = date.getDay();
  date.setDate(1 - dayOfWeek);

  var weeks = [];

  var days = [];

  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < 7; i++) {
      days.push({dayOfMonth: date.getDate()});
      date.setDate(date.getDate() + 1);
    }
    weeks.push({days: days});
    days = [];
  }

  return weeks;
};

module.exports = CalendarView;
