
var app = app || {};

$(document).ready(function() {
   app.router = new app.AppRouter();
   _.templateSettings = {
      evaluate : /\{\[([\s\S]+?)\]\}/g,
      interpolate : /\{\{([\s\S]+?)\}\}/g
   };
   // app.flights = new app.Flights();
   // app.flights.fetch().done(function () {
   //   console.log(app.flights);
   // });
   app.reservations = new app.Reservations();

   Backbone.history.start();
   app.reservations.fetch();

   app.reservations.fetch(function() {
       app.reservations = new app.Reservations();
       setInterval(function() {
           app.reservations.fetch();
       }, 5000);
   });

});
