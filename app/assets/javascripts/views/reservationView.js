var app = app || {};

app.ReservationView = Backbone.View.extend({
  tagname:'li',
  el: "#main",
  render: function(name, origin, destination, departure, row, column, plane) {
    console.log(name + " is the flight name");
    console.log(origin + " is origin");
    console.log(destination + " is destination");
    console.log(departure + " is departure");
    console.log(row + " is rows");
    console.log(column + " is columns");
    console.log("AYYYY LMAO");


    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    $("#flightName").html(name);
    $("#flightOrigin").html(origin);
    $("#flightDestination").html(destination);
    $("#flightDeparture").html(departure);
    $("#rows").html(row);
    $("#columns").html(column);
    $("#plane").html(plane);

  var seats = _.range(row * column);

    _.each(seats, function(s){
      $("#resBoard").append("<span class = resSquare>" + s + "</span>");
    });


    // this.$el.text(this.model.toJSON().content);
    // this.$el.prependTo("#secrets");
  },
});
// var app = app || {};
//
// app.ReservationView = Backbone.View.extend({
//     el: "#main",
//
//     createReservation: function() {
//         var reservation = new app.Reservation();
//         reservation.set({
//             // user_id:
//             flight_name: this.model.get("name"),
//             seat_row: 1,
//             seat_column: 1
//         });
//
//         reservation.save();
//
//         app.Reservations.add( reservation );
//     },
//
//     render: function() {
//         var selectedFlightTemplate = _.template( $("#flightTemplate").html() );
//         var dateFormat = moment(this.model.get("date"));
//         dateFormat = dateFormat.format("L");
//         this.model.set({ date: dateFormat });
//
//         var seatingHTML = "<table id='flightInfo'><tr>";
//         seatingHTML += selectedFlightTemplate( this.model.toJSON() );
//         seatingHTML += "</tr></table>";
//
//         var plane = app.planes.findWhere({ id: this.model.get("plane_id") });
//         var row = airplane.get("rows");
//         var column = airplane.get("columns");
//
//         seatingHTML += "<table id='reservationTable'>";
//
//         for (var i = 1; i < row; i++) {
//             seatingHTML += "<tr>";
//             for (var j = 0; j < column; j++) {
//                 seatingHTML += "<td>";
//                 seatingHTML += "seat " + i + String.fromCharCode(65 + j);
//                 seatingHTML += "</td>";
//             }
//             seatingHTML += "</tr>";
//         }
//          console.log(seatingHTML);
//         this.$el.html(seatingHTML);
//     }
// });
