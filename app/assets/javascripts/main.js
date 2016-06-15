var app = app || {};

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


});
