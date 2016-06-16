var app = app || {};

app.FlightListView = Backbone.View.extend({
    tagName: "tr",

    events: {
        "click": "showFlight"
    },

    showFlight: function() {
        app.router.navigate("flight/" + this.model.get("name"), true);
    },

    render: function() {
        var flightListViewTemplate = _.template( $("#flightTemplate").html() );
        var dateFormat = moment(this.model.get("date"));
        dateFormat = dateFormat.format("L");
        this.model.set({ date: dateFormat });

        this.$el.html( flightListViewTemplate( this.model.toJSON() ) );
        this.$el.appendTo("#searchResults");
    }
});

// create_table :flights do |t|
//   t.string :name
//   t.string :origin
//   t.string :destination
//   t.datetime :departure
//   t.integer :plane_id
