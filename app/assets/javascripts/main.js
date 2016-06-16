var app = app || {};

// _.templateSettings = {
//     evaluate : /\{\[([\s\S]+?)\]\}/g,
//     interpolate : /\{\{([\s\S]+?)\}\}/g
// };

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

<<<<<<< HEAD

  // app.flights = new app.Flights();
  //  app.flights.fetch().done(function () {
  //    app.router = new app.AppRouter();
  //    Backbone.history.start();
  //  });



=======
>>>>>>> 58e479b8cdc6ad1b7e3c4bdfe160109854c0188c
});
