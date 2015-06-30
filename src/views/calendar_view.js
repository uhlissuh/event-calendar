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
      var day = {
        dayOfMonth: date.getDate()
      };
      days.push(day);
      if (date.getDate() === 15) {
        day.events = [
          {name: "Barf Party"},
          {name: "Louisa's birthday"}
        ];
      }
      date.setDate(date.getDate() + 1);
    }
    weeks.push({days: days});
    days = [];
  }

  return weeks;
};

module.exports = CalendarView;
