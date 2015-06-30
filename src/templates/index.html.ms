<!DOCTYPE html>

<html>
    <head>
      <link rel="stylesheet" type="text/css" href="static/bootstrap.css">
      <link rel="stylesheet" type="text/css" href="static/main.css">
    </head>
    <body>
      <div class="row">
        <div class="col-md-12"><h1>{{month}}</h1></div>
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
            <div class="col-md-1">{{dayOfMonth}}</div>
          {{/days}}
        </div>
      {{/weeks}}

    </body>
</html>
