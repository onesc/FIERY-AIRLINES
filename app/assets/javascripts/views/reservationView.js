var app = app || {};

app.ReservationView = Backbone.View.extend({
  tagname:'li',
  el: "#main",
<<<<<<< HEAD
  render: function(name, origin, destination, departure, row, column, plane, flight_id) {
=======
  render: function(name, origin, destination, departure, row, column, plane) {
>>>>>>> 58e479b8cdc6ad1b7e3c4bdfe160109854c0188c
    // console.log(name + " is the flight name");
    // console.log(origin + " is origin");
    // console.log(destination + " is destination");
    // console.log(departure + " is departure");
    // console.log(row + " is rows");
    // console.log(column + " is columns");
    // console.log("AYYYY LMAO");


    var appViewTemplate = $("#appViewTemplate").html();
    $("#reservationsViewTemplate").html(appViewTemplate);

    $("#flightName").html(name);
    $("#flightOrigin").html(origin);
    $("#flightDestination").html(destination);
    $("#flightDeparture").html(departure);
    $("#rows").html(row);
    $("#columns").html(column);
    $("#plane").html(plane);

<<<<<<< HEAD
  var seats = [];
  var rows = _.range(row);
  var columns = _.range(column);
  _.each(rows, function (r){
    _.each(columns, function (c) {
      var seat = [c, r];
      seats.push(seat);
    });
  });

  console.log("seats array: ", seats);
  console.log(flight_id);


  var makeRes = function(){

    var row = $(this).attr("row");
    var column = $(this).attr("column");
    newRes = new app.Reservation();
    newRes.set("row_number", row);
    newRes.set("column_number", column);
    newRes.set("flight_id", flight_id);
    newRes.save({
      success: console.log("success"),
      error: console.log("error")
    }).done(function(){
      app.reservations.fetch();
    });
  };


    _.each(seats, function(s){
      // this.newRes = new app.Reservation("row_number", s[1], "column_number", s[0]);

    if (s[0] === 0) {
      $("#resBoard").append("</br> <hr>");
    }
      var $reservation = $("<span row = " + s[1] + " column = " + s[0] + " class = resSquare>" + this.newRes + s + "</span>");
      $reservation.click(makeRes);
      $("#resBoard").append($reservation);
    });
=======
    var seats = [];
     var rows = _.range(row);
     var columns = _.range(column);
     _.each(rows, function (r){
       _.each(columns, function (c) {
         var seat = [c, r];
         seats.push(seat);
       });
     });

     console.log("seats array: ", seats);



       _.each(seats, function(s){
       if (s[0] === 0) {
         $("#resBoard").append("</br> <hr>");
       }
         $("#resBoard").append("<span class = resSquare>" + s + "</span>");
       });
>>>>>>> 58e479b8cdc6ad1b7e3c4bdfe160109854c0188c

    // _.each(seats, function(s){
    // if (s[0] === 0) {
    //   $("#resBoard").append("</br> <hr>");
    // }
    //   $("#resBoard").append("<span class = resSquare>" +
    //   s +
    //   "<%= form_for Reservation.new do |f| %> <%= hidden_field_tag(:row_number, "+ s[1] +
    //   ")%> <%= hidden_field_tag(:column_number, "+ s[0] +
    //   ")%> <%= hidden_field_tag(:user_id, session[:user_id]) %> <%= f.submit 'Reserve' %>" +
    //   "</span>");
    // });


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
//         var plane = app.planes.findWhere({ id: this.model.get("name") });
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
// // t.string :name
// // t.integer :rows
// // t.integer :columns
