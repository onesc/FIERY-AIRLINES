var app = app || {};

// _.templateSettings = {
//     evaluate : /\{\[([\s\S]+?)\]\}/g,
//     interpolate : /\{\{([\s\S]+?)\}\}/g
// };

$(document).ready(function() {
    app.router = new app.AppRouter();
    app.reservations = new app.Reservations();

    Backbone.history.start();
    app.reservations.fetch();

    app.reservations.fetch(function() {
        app.reservations = new app.Reservations();
        setInterval(function() {
            app.reservations.fetch();
        }, 5000);
    });


  // app.flights = new app.Flights();
  //  app.flights.fetch().done(function () {
  //    app.router = new app.AppRouter();
  //    Backbone.history.start();
  //  });



});
