$(function () {
  $("input").attr("checked", false);

  $("td.item").bind("click", function() {
    $("td").removeClass("blue");
    $(this).addClass("blue");
  });

  $("td.rating").bind("click", function () {
    var $selected_rating = $(this).attr("id");
    $("td.item").each(function () {
      if($(this).attr("class").indexOf("blue") != -1) {
        var $item = $(this).attr("id");
        $("td.rating").removeClass("blue");
        $("input[name='" + $item + "'][value='" + $selected_rating + "']").attr("checked", true);
        $("#" + $selected_rating).addClass("blue");
      }
    });
  });
});
