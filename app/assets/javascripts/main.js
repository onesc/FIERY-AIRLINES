
var app = app || {};
var getReservations;
$(document).ready(function() {
   app.router = new app.AppRouter();
   _.templateSettings = {
      evaluate : /\{\[([\s\S]+?)\]\}/g,
      interpolate : /\{\{([\s\S]+?)\}\}/g
   };


   app.reservations = new app.Reservations();

   Backbone.history.start();
   app.reservations.fetch();


});
