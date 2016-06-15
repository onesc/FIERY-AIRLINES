var app = app || {};

$(document).ready(function() {
    app.flights = new app.Flights();
    app.flights.fetch(function() {
        app.reservations = new app.Reservations();
        setInterval(function() {
            app.reservations.fetch();
        }, 1000);
    });

    app.airplanes = new app.Airplanes();
    app.airplanes.fetch().done(function () {
        app.router = new app.AppRouter();
        Backbone.history.start();
    });
});
