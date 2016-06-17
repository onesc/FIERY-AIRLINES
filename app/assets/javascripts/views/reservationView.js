var app = app || {};

app.ReservationView = Backbone.View.extend({


  tagname:'li',
  el: "#main",
  render: function(name, origin, destination, departure, row, column, plane, flight_id) {




    clearInterval(getReservations);
    getReservations = setInterval(function(){
      app.reservations.fetch();
      var madd;
      reservedSeats = [];
      _.each(app.reservations.where({flight_id: flight_id}), function(s){
        resSeat = [s.attributes.column_number, s.attributes.row_number];
        reservedSeats.push(resSeat);
      });

        _.each($('.resSquare'), function(r) {
          // console.log($(r).attr("row") +','+ $(r).attr("column"));
          row = parseInt($(r).attr("row"));
          column = parseInt($(r).attr("column"));

                  _.each(reservedSeats, function(rs) {
                    if ((rs[0] === column) && (rs[1] === row)) {
                        $(r).toggleClass("resSquare_2");
                  }
          });
        });
    }, 1000);

  var appViewTemplate = $("#appViewTemplate").html();
   $("#reservationsViewTemplate").html(appViewTemplate);

    $("#flightName").html(name);
    $("#flightOrigin").html(origin);
    $("#flightDestination").html(destination);
    $("#flightDeparture").html(departure);
    $("#rows").html(row);
    $("#columns").html(column);
    $("#plane").html(plane);

  var seats = [];
  var rows = _.range(row);
  var columns = _.range(column);
  _.each(rows, function (r){
    _.each(columns, function (c) {
      var seat = [c, r];
      seats.push(seat);
    });
  });

  reservedSeats = [];
  _.each(app.reservations.where({flight_id: flight_id}), function(s){
    resSeat = [s.attributes.column_number, s.attributes.row_number];
    reservedSeats.push(resSeat);
  });

  console.log(reservedSeats);


  var user_id = window.currentUser.id;


  var checkRes = function(){
    var row = $(this).attr("row");
    var column = $(this).attr("column");
    var resExists;
    var meme = this;

    if (app.reservations.where({flight_id: flight_id, column_number: parseInt(column), row_number: parseInt(row)}).length === 0){
      resExists = false;
    } else {
      resExists = true;
      console.log("that already exists bro");
    }

    var makeRes = function(){
      newRes = new app.Reservation();
      newRes.set("row_number", row);
      newRes.set("column_number", column);
      newRes.set("flight_id", flight_id);
      newRes.set("user_id", window.currentUser.id);
      newRes.save().done(function(){
      $(meme).removeClass("resSquare").addClass("resSquare_2");
        app.reservations.fetch();
      });
    };

      if (resExists === false) {
          setTimeout(makeRes,1000);
          }
  };




    _.each(seats, function(s){
      // this.newRes = new app.Reservation("row_number", s[1], "column_number", s[0]);
      if (s[0] === 0) {
        $("#resBoard").append("</br> <hr>");
      }
      $reservation = $("<span row = " + s[1] + " column = " + s[0] + " class = resSquare>" +  "</span>");

        _.each(reservedSeats, function(rs) {
          if ((rs[0] === s[0]) && (rs[1] === s[1])) {
          $reservation = $("<span row = " + s[1] + " column = " + s[0] + " class = resSquare_2>"  + "</span>");
        }
        });

      $reservation.click(checkRes);
      $("#resBoard").append($reservation);
    });
  },
});
