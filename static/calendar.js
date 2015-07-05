var saveEventButton = document.querySelector(".save-event");

saveEventButton.addEventListener("click", function() {
  var form = document.querySelector("#event-form");
  var name = form.querySelector("input[name=name]");
  var date = form.querySelector("input[name=date]");
  var location = form.querySelector("input[name=location]");
  var description = form.querySelector("[name=description]");
  $.ajax("/events", {
    method:"POST",
    success: function(data) {
      console.log(data);
    }
  });
});
