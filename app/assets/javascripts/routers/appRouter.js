var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    'main': 'index',
    '': 'index',
    'reserve/:flight/:row/:column': 'dinov',
    'flight/:id': 'testFunction'
  },

  index: function (){
    $(document).ready(function(){
      var indexView = new app.IndexView({ collection: app.flights });
         indexView.render();
    });

  },



  testFunction: function(id){
    console.log("OMG FLIGHT PAGE " + id);
    var $flightInfo;
    var flightUrl = "flightinfo/" + id;
    $.getJSON(flightUrl, function(data) {
      return data;
    }).done(function(data){
      var resView = new app.ReservationView();
      console.log(data);
      resView.render(data.name, data.origin, data.destination, data.departure, data.plane.rows, data.plane.columns, data.plane.name, data.id);
    });
  }


  // showFlight: function(id) {
  //    var indexView = new app.FlightView({ collection: app.flights });
  //
  //    flight = // get the flight from the server
  //    indexView.render(flight);
  //  }


});
