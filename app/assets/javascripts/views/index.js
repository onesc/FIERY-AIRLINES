var app = app || {};

app.IndexView = Backbone.View.extend({
    el: '#main',
    events:{
      'keyup input': 'filter'
    },
    updateTable: function(flights) {
      $("#resultsTable tbody tr").remove();
      if (flights.models)
        flights = flights.models;

      _.each(flights, function (flight) {
        console.log("AAA");
        console.log(flight.attributes);
          var $tr = $("<tr>");
          $tr.append($("<td>").text(new Date(flight.attributes.departure).toDateString()));
          var $a = $("<a>");
          $a.attr("href", "#flight/" + flight.attributes.id);
          $a.text(flight.attributes.name);
          $tr.append($("<td>").html($a));
          $tr.append($("<td>").text(flight.attributes.origin +" "+ flight.attributes.destination));
          $tr.append($("<td>").text(flight.attributes.plane_id));
          // $tr.append($("<td>").text(flight.get('departure')));
          // $tr.append($("<td>").text(flight.get('name')));
          // $tr.append($("<td>").text(flight.get('origin') +" "+ flight.get('destination')));
          // $tr.append($("<td>").text(flight.get('plane_id')));

          $("#resultsTable tbody").append($tr);
      });
    },

    render: function () {
      var appViewTemplate = $("#searchView").html();
      this.$el.html( appViewTemplate );

      // var secretInput = new app.SecretInputView();
      // secretInput.render();

      this.updateTable(this.collection);
    },

    filter: function() {
      console.log("here");
      var origin = $("#from").val();
      var destination = $("#to").val();

      var flights = _.filter(this.collection.models, function(flight) {
        flight = flight.toJSON();
        // console.log(flight);
        // console.log(flight.origin);
        // console.log(flight.origin.startsWith(origin));

        return flight.origin.startsWith(origin) && flight.destination.startsWith(destination);
      });

      console.log(flights);

      this.updateTable(flights);
    }
});
