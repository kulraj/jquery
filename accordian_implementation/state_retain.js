function getClickedItem() {
  var $url = $(location).attr("href").replace("%20", " ");
  return $url.split("?")[1];
}

$(function () {
  var $clicked_item = getClickedItem();
  var $links = $("a");

  $.each($links, function () {
    //add information of clicked item to url
    $(this).attr("href",$(this).attr("href") + "?" + $(this).text());
    // highlight clicked item and display its parent lists
    if ($clicked_item == $(this).text()) {
      $(this).addClass("clicked");
      // add active class to anchor tag pertaining to parent ul of clicked node
      $(this).parent().parent().prev().addClass("active");
    }
  });
});
