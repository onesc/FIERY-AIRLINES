// var app = app || {};
//
// app.SearchFormView = Backbone.View.extend({
//     el: "#searchForm",
//
//     events: {
//         "submit form": "searchFlight",
//     },
//
//     searchFlight: function(event) {
//         event.preventDefault();
//         var flightFrom = this.$el.find("#origin").val();
//         var flightTo = this.$el.find("#destination").val();
//         if (flightOrigin.length === 0 && flightDestination === 0) {
//             return;
//         }
//
//         var resultSet = app.flights.where({ from: flightOrigin, to: flightDestination });
//
//         $("#searchResults").empty();
//
//
//         $("#searchResults").addClass("searchResults");
//         var tableHeaders = "<tr><th>Plane Name</th><th>Flight Number</th><th>From</th><th>To</th><th>Date</th></tr>";
//         $("#searchResults").append(tableHeaders);
//
//         _.each(resultSet, function(flight) {
//
//             var flightListView = new app.FlightListView({ model: flight });
//             flightListView.render();
//
//
//         });
//
//     },
//
//     render: function() {
//         var searchFormViewTemplate = $("#searchFormTemplate").html();
//         this.$el.html(searchFormViewTemplate);
//     }
// });
