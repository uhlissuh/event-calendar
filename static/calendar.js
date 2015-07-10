var saveEventButton = document.querySelector(".save-event");

saveEventButton.addEventListener("click", function() {
  var form = document.querySelector("#event-form");
  var name = form.querySelector("input[name=name]");
  var time = form.querySelector("input[name=time]");
  var location = form.querySelector("input[name=location]");
  var description = form.querySelector("[name=description]");
  $.ajax("/events", {
    method:"POST",
    success: function(data) {
      console.log(data);
    },
    data: {
      name: name.value,
      time: time.value,
      location: location.value,
      description: description.value
    }
  });
});
