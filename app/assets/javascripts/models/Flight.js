var app = app || {};

app.Flight = Backbone.Model.extend({
    urlRoot: "/flights",
    defaults: {
        name: "",
        origin: "",
        destination: "",
        departure: "",
        plane_id: ""
    }
});
