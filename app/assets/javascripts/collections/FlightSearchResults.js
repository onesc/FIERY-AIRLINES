var app = app || {};

app.FlightSearchResults = Backbone.Collection.extend({
  url: function(){
    return "/flights?from=" + this.from + "&to=" + this.to;
  }
});
