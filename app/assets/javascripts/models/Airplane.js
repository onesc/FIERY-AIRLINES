var app = app || {};

app.Plane = Backbone.Model.extend({
    urlRoot: "/planes",
    defaults: {
      name: "",
      rows: "",
      columns: ""
    }
});
// create_table :planes do |t|
//   t.string :name
//   t.integer :rows
//   t.integer :columns
