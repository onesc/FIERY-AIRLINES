var app = app || {};

app.Flight = Backbone.Model.extend({
    urlRoot: "/flights",
    defaults: {
      name: "",
      origin: "",
      destination: "",
      datetime: "",
      plane_id: ""
    }
});
// create_table :flights do |t|
//   t.string :name
//   t.string :origin
//   t.string :destination
//   t.datetime :departure
//   t.integer :plane_id
