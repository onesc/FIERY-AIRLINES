var app = app || {};
var updateTable = function(flights) {
  console.log(flights);
  $("#resultsTable tbody tr").remove();

  _.each(flights, function (flight) {
    if (flight.attributes)
      flight = flight.attributes;
      var $tr = $("<tr>");
      $tr.append($("<td>").text(new Date(flight.departure).toDateString()));
      var $a = $("<a>");
      $a.attr("href", "#flight/" + flight.id);
      $a.text(flight.name);
      $tr.append($("<td>").html($a));
      $tr.append($("<td>").text(flight.origin +" "+ flight.destination));
      $tr.append($("<td>").text(flight.plane_id));

      $("#resultsTable tbody").append($tr);
  });
};

app.IndexView = Backbone.View.extend({
   el: '#main',
   events:{
     'keyup input': 'filter'
   },

   render: function () {
     var appViewTemplate = $("#searchView").html();
     this.$el.html( appViewTemplate );
     app.flights = new app.Flights();
     app.flights.fetch().done(function(data) {
        updateTable(data);
     });
   },

   filter: function() {
     console.log("here");
     var origin = $("#from").val();
     var destination = $("#to").val();

     var flights = _.filter(app.flights.models, function(flight) {
       flight = flight.toJSON();
       return flight.origin.toLowerCase().startsWith(origin.toLowerCase()) && flight.destination.toLowerCase().startsWith(destination.toLowerCase());
     });

     updateTable(flights);
   }
});
