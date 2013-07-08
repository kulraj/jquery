$(document).ready(function() {
  var $blog_headlines  = $("#blog h3");
  //1 Create a target div after the headline for each blog post and 
  $("<div></div>").insertAfter($blog_headlines);
  // store a reference to it on the headline element using $.fn.data
  for (i = 0; i < $blog_headlines.length; i += 1) {
    $blog_headlines.eq(i).data("target_div", $blog_headlines.eq(i).next());
  }

  //2 Bind a click event to the headline
  $blog_headlines.bind("click", function (event) {
    event.preventDefault();

    // extract the id from link
    var link = $(this).children("a").attr("href");
    var regex_for_id = /#[^.]+$/;
    var id = link.match(regex_for_id);
    // use the $.fn.load method to load the appropriate content from blog.html into the target div
    $(this).data("target_div").load("blog.html" + " " + id);
  });
});
