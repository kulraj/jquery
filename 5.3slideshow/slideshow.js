function timerForSlideshow (i, $slideshow_list_items, time_for_one_item, fade_time) {
  $slideshow_list_items.eq(i).fadeIn(fade_time).delay(time_for_one_item - fade_time * 2).fadeOut(fade_time);
  // find which image it is
  $("#which_image").find("li").text($slideshow_list_items.eq(i).children("img").attr("alt"));
  i += 1;
  return (i === $slideshow_list_items.length) ? 0 : i; //3 reloop when items end
}

function createNavigationArea($slideshow) {
  var $navigation_area = $("<ul id='navigation_area'></ul>").insertAfter($slideshow);
  $("<li id='number_images' >number of images </li>").appendTo($navigation_area);
  $("<li id='which_image' > which image?</li>").appendTo($navigation_area);
  $("<ul><li></li></ul>").appendTo($navigation_area.children("li"));
}

$(document).ready(function() {
  //1  Move the #slideshow element to the top of the body.
  var $first_element = $("body").children().eq(0);
  var $slideshow = $("#slideshow");
  $slideshow.insertBefore($first_element);

  $("#slideshow li").hide(); 
  var $slideshow_list_items = $("#slideshow li"), i = 0;

  // you can easily change the timings for slideshow by changing these variables:
  //but please keep fade time less than (time for one item) /2 ;-)
  var time_for_one_item = 2000, fade_time = 200;
  createNavigationArea($slideshow);

  //2 cycle through the list items inside the element
  setInterval(function() {i = timerForSlideshow(i, $slideshow_list_items, time_for_one_item, fade_time); }, time_for_one_item);

  // write the number of items
  $("#number_images").find("li").append($slideshow_list_items.length);
});
