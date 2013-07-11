$(document).ready(function() {

  //1 Hide all of the modules
  $(".module").addClass("hidden");

  //2 Create an unordered list element before the first module
  $("<ul id='list'></ul>").insertBefore(".module:first");

  //3 Iterate over the modules using $.fn.each.
  //For each module, use the text of the h2 element as the text for a list item
  //that you add to the unordered list element.
  $(".module").each(function() {
    $this = $(this);
    $("<li>" + $this.children("h2").text() + "</li>").appendTo("#list");
  });

  //4 Bind a click event to the list item
  $("#list li").bind('click', function() {
    var $clicked_list_item = $(this);
    $(this).addClass("current");
    $(this).siblings().removeClass("current");
    // show the corresponding module and hide others
    $(".module").each(function() {
      if ($(this).attr("id") == $clicked_list_item.html().toLowerCase()) {
        $(this).removeClass("hidden");
      } else {
        $(this).addClass("hidden");
      }
    });
  });

  //5 show the first tab
  $(".module:first").removeClass("hidden");
});
