function countTickedCheckboxes(div_id) {
  var count_ticked_checkboxes = 0;
  $(div_id + " input[type='checkbox']").each( function () {
    if ($(this).attr("checked")) {
      count_ticked_checkboxes += 1;
    }
  });
  return count_ticked_checkboxes;
}

function filter() {
  var count_checked_brands = countTickedCheckboxes("#brand"), count_checked_colors = countTickedCheckboxes("#color");
  $("#brand input").each( function() {
    if ($(this).attr("checked") || count_checked_brands == 0) {
      var brand = $(this).attr("id");
      $("#color input").each( function() {
        if ($(this).attr("checked") || count_checked_colors == 0) {
          $("div div[data-brand='" + brand + "'][data-color='" + $(this).attr("id") + "']").show();
        }  
      });
    }
  });

  if ($("#available").attr("checked")) {
    $("div div[data-sold-out=1]").hide();
  }
}

$(document).ready(function() {
  $("input[type='checkbox']").attr("checked", false);
  $("#all").attr("checked", true);
  $("div input").click(function() {
    $("div div").hide();
    filter();
  });
});
