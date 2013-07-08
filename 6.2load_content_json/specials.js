$(document).ready(function() {
  //1 Append a target div after the form that's inside the #specials element
  var $div = $("<div></div>").insertAfter("#specials form");

  //2  Bind to the change event of the select element
  $("select").bind("change", function () {
    $.ajax ( {// send an Ajax request to specials.json on selection change
      url : "specials.json",
      type : "GET",
      dataType : "json",
      success : function (specials) {
        var $previous_color;
        // clear div and remove previous color classes
        $div.empty();
        $div.removeClass($previous_color);
        //3 use the value the user selected in the select to look up information about the special in the JSON response.
        var $day = specials[$("select option:selected").val()];
        //4 Add some HTML about the special to the target div
        $("<h2></h2>").text($day.title).appendTo($div);
        $("<p></p>").text($day.text).appendTo($div);
        $("<img></img>").attr("src", $day.image.substring(1)).appendTo($div);
        $div.addClass($day.color);
        $previous_color = $day.color;
        //5 remove the submit button
        $("#specials li.buttons").remove();
      }
    });
  });
});
