var app = app || {};

app.FlightView = Backbone.View.extend({
    el: '#main',
    render: function (flight) {
    var flightView = $("#flightView").html();
    this.$el.html( flightView );
    this.$el.find("#flightnum").text(flight.number);
}
});
