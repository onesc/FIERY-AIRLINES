var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'reserve/:flight/:row/:column': 'dinov',
    'flight/:id': 'testFunction'
  },

  index: function (){
<<<<<<< HEAD
    console.log("index method ran");
    // var indexView = new app.IndexView({ collection: app.flights });
    //    indexView.render();
=======
    console.log( "You have reached the search." );
    var indexView = new app.IndexView({ collection: app.flights });
    indexView.render();
>>>>>>> 58e479b8cdc6ad1b7e3c4bdfe160109854c0188c
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
<<<<<<< HEAD
      resView.render(data.name, data.origin, data.destination, data.departure, data.plane.rows, data.plane.columns, data.plane.name, data.id);
=======
      console.log("TRYING TO RENDER RESVIEW");
      resView.render(data.name, data.origin, data.destination, data.departure, data.plane.rows, data.plane.columns, data.plane.name);
>>>>>>> 58e479b8cdc6ad1b7e3c4bdfe160109854c0188c
    });
  }


  // showFlight: function(id) {
  //    var indexView = new app.FlightView({ collection: app.flights });
  //
  //    flight = // get the flight from the server
  //    indexView.render(flight);
  //  }


});
