var app = app || {};

app.AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'flight/:id': 'showFlight'
    },

    index: function () {
        console.log( "You have reached the index." );
        var indexView = new app.IndexView({ collection: app.flights });
        indexView.render();
    },

    showFlight: function(id) {
      var indexView = new app.FlightView({ collection: app.flights });

      flight = // get the flight from the server
      indexView.render(flight);
    }
});
