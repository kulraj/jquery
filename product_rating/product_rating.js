$(function () {
  $("input").attr("checked", false);

  $("td.item").bind("click", function() {
    $("td").removeClass("blue");
    $(this).addClass("blue");
  });

  $("input").bind("click", function () {
    if ($("td[id='" + $(this).attr("name") + "']").attr("class").indexOf("blue") != -1) {
      $("td").removeClass("blue");
      $("td[id='" + $(this).attr("value") + "']").addClass("blue");
      $("td[id='" + $(this).attr("name") + "']").addClass("blue");
    }
  });
});
