function getClickedItem() {
  var $url = $(location).attr("href").replace("%20", " ");
  return $url.split("?")[1];
}

function showDropdownChain($node) {
  var $parent;
  // chain from node up to parent
  for (; $node.length; $node = $parent) {
    $parent = $node.parent().parent().prev("a");
    $node.addClass("show-dropdown");
    //$node.slideDown();
  }
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
      showDropdownChain($(this).parent().parent().prev());
    }
  });

  // function to hide all lists other than the current one
  $links.bind("click", function () {
    $.each($links, function () {
      $(this).removeClass("show-dropdown");
    });
    if ($(this).next().attr("class") == "accordion") {
      showDropdownChain($(this));
    }
  });
});
