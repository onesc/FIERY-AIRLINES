app.flightListView = Backbone.View.extend({
    tagName: "li",
    render: function () {
        this.$el.text( this.model.get('name') );
        this.$el.prependTo( '#flights' );
    }
});
