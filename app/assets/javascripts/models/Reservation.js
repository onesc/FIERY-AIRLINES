var app = app || {};

app.Reservation = Backbone.Model.extend({
urlRoot: "/reservations",


  initialize: function(){
    // this.set("flight_id", 1);
    // $.getJSON(this.get("url") [, data ] [, success ] )



    var $fuck = this;
    var $jsonData = $.getJSON(this.get("url"), function(data) {
      return data;
    }).done( function(){
      if($jsonData.readyState == 4){
        $fuck.set("flight_id", $jsonData.responseJSON.flight_id);
        $fuck.set("user_id", $jsonData.responseJSON.user_id);
        $fuck.set("row_number", $jsonData.responseJSON.row_number);
        $fuck.set("column_number", $jsonData.responseJSON.column_number);
      }
    });

    console.log("A new reservation was created");
  }
});
