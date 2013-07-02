$(document).ready(function() {

  //1 Hide all of the modules
  $(".module").addClass("hidden");

  //2 Create an unordered list element before the first module
  $("<li> an unordered list element </li>").insertBefore(".module:first");

  //3 Iterate over the modules using $.fn.each.
  //For each module, use the text of the h2 element as the text for a list item
  //that you add to the unordered list element.
  $(".module").each(function() {
    $this = $(this);
    $("<li>" + $this.children("h2").text() + "</li>").insertBefore(this);
  });

  //4 Bind a click event to the list item
  $(".module").prev().bind('click', function() {
    $this = $(this);
    $this.next().removeClass("hidden");// Show the related module
    $(".module").not($this.next()).addClass("hidden");//hide any other modules
    $this.addClass("current"); //Add a class of "current" to the clicked list item
    $(".module").prev().not($this).removeClass("current");//Remove the class "current" from the other list item
  });

  //5 show the first tab
  $(".module:first").removeClass("hidden");
});
