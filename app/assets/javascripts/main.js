var app = app || {};

_.templateSettings = {
    evaluate : /\{\[([\s\S]+?)\]\}/g,
    interpolate : /\{\{([\s\S]+?)\}\}/g
};





$(document).ready(function () {
    app.flights = new app.Flights();
    app.flights.fetch().done(function () {
      app.router = new app.AppRouter();
      Backbone.history.start();
    });
    
});
