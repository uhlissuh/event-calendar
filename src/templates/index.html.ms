<!DOCTYPE html>

<html>
    <head>
      <link rel="stylesheet" type="text/css" href="/static/bootstrap.css">
      <link rel="stylesheet" type="text/css" href="/static/main.css">
    </head>
    <body>
      <div class="row">
        <div class="col-md-12">
          <h1 class="month-title">{{month}}</h1>
          <a href="#new-event" data-toggle="modal" data-target="#new-event-modal">Create New Event</a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-1 cal-header">Sunday</div>
        <div class="col-md-1 cal-header">Monday</div>
        <div class="col-md-1 cal-header">Tuesday</div>
        <div class="col-md-1 cal-header">Wednesday</div>
        <div class="col-md-1 cal-header">Thursday</div>
        <div class="col-md-1 cal-header">Friday</div>
        <div class="col-md-1 cal-header">Saturday</div>
        <div class="col-md-5 cal-header"></div>
      </div>

      {{#weeks}}
        <div class="row">
          {{#days}}
            <div class="col-md-1">
              {{dayOfMonth}}
              <ul>
                {{#events}}
                <li>{{name}}</li>
                {{/events}}
              </ul>
            </div>

          {{/days}}
        </div>
      {{/weeks}}


      <div class="modal fade" id="new-event-modal" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Create New Event</h4>
            </div>
            <div class="modal-body">
              <form id="event-form">
                <input placeholder="Event Name" name="name"></input>
                <input placeholder="MM/DD/YYYY" name="time"></input>
                <input placeholder="Location" name="location"></input>
                <textarea placeholder="Event Description" name="description"></textarea>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary save-event">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <script type="text/javascript" src="/static/jquery.js"></script>
      <script type="text/javascript" src="/static/bootstrap.js"></script>
      <script type="text/javascript" src="/static/calendar.js"></script>

    </body>
</html>
