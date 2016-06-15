var app = app || {};

app.ReservationView = Backbone.View.extend({
  tagname:'li',
  el: "#main",
  render: function(name, origin, destination, departure, row, column, plane) {
    console.log(name + " is the flight name");
    console.log(origin + " is origin");
    console.log(destination + " is destination");
    console.log(departure + " is departure");
    console.log(row + " is rows");
    console.log(column + " is columns");
    console.log("AYYYY LMAO");


    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    $("#flightName").html(name);
    $("#flightOrigin").html(origin);
    $("#flightDestination").html(destination);
    $("#flightDeparture").html(departure);
    $("#rows").html(row);
    $("#columns").html(column);
    $("#plane").html(plane);

  var seats = _.range(row * column);

    _.each(seats, function(s){
      $("#resBoard").append("<span class = resSquare>" + s + "</span>");
    });







    // this.$el.text(this.model.toJSON().content);
    // this.$el.prependTo("#secrets");
  },
});
