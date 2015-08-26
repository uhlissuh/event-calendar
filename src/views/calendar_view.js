function CalendarView(date, events) {
  this.date = date;
  this.events = events;
}

CalendarView.prototype.getWeeks = function() {
  var date = new Date(this.date);
  date.setDate(1);
  var dayOfWeek = date.getDay();
  date.setDate(1 - dayOfWeek);

  var weeks = [];

  var days = [];

  for (var j = 0; j < 5; j++) {
    if (j % 2 === 0) {
      var color = "blue";
    } else {
      color = "gray";
    }
    for (var i = 0; i < 7; i++) {
      var day = {
        dayOfMonth: date.getDate()
      };
      days.push(day);
      day.events = this.events.filter(function(event) {
        return (event.time.getMonth() === date.getMonth() && event.time.getDate() === date.getDate());
      });

      date.setDate(date.getDate() + 1);
    }
    weeks.push({
      days: days,
      color: color
    });
    days = [];
  }

  return weeks;
};

module.exports = CalendarView;
