var app = app || {};

app.ReservationView = Backbone.View.extend({



 tagname:'li',
 el: "#main",
 render: function(name, origin, destination, departure, row, column, plane, flight_id) {



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


<<<<<<< HEAD
 var user_id = window.currentUser.id;


 var checkRes = function(){
   var row = $(this).attr("row");
   var column = $(this).attr("column");
   var resExists;
   var meme = this;
=======
            newRes = new app.Reservation();
            newRes.set("row_number", row);
            newRes.set("column_number", column);
            newRes.set("flight_id", flight_id);
            newRes.set("user_id", window.currentUser.id);
            newRes.save().done(function(){
            $(meme).html("TAKEN");
            $(meme).toggleClass("resSquare_2");
              app.reservations.fetch();
            });
          }
  };
>>>>>>> b18bdd528313c5fe8907258175278e00b73daca3

   if (app.reservations.where({flight_id: flight_id, column_number: parseInt(column), row_number: parseInt(row)}).length === 0){
     resExists = false;
   } else {
     resExists = true;
     console.log("that already exists bro");
   }
     if (resExists === false) {

           newRes = new app.Reservation();
           newRes.set("row_number", row);
           newRes.set("column_number", column);
           newRes.set("flight_id", flight_id);
           newRes.set("user_id", window.currentUser.id);
           newRes.save().done(function(){
           $(meme).html("TAKEN");
             app.reservations.fetch();
           });
         }
 };




   _.each(seats, function(s){
     // this.newRes = new app.Reservation("row_number", s[1], "column_number", s[0]);
     if (s[0] === 0) {
       $("#resBoard").append("</br> <hr>");
     }
     $reservation = $("<span row = " + s[1] + " column = " + s[0] + " class = resSquare>" + "PICK ME!" +  "</span>");

       _.each(reservedSeats, function(rs) {
         if ((rs[0] === s[0]) && (rs[1] === s[1])) {
         $reservation = $("<span row = " + s[1] + " column = " + s[0] + " class = resSquare>" + "TAKEN" + "</span>");
       }
       });

     $reservation.click(checkRes);
     $("#resBoard").append($reservation);
   });
 },
});
