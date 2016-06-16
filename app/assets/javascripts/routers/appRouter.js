var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'reserve/:flight/:row/:column': 'dinov',
    'flight/:id': 'testFunction'
  },

  index: function (){
    console.log( "You have reached the search." );
    var indexView = new app.IndexView({ collection: app.flights });
    indexView.render();
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
      console.log("TRYING TO RENDER RESVIEW");
      resView.render(data.name, data.origin, data.destination, data.departure, data.plane.rows, data.plane.columns, data.plane.name);
    });


    // console.log($flightData);

  }

});
