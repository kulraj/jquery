var $slideshow_list_items;

function createNavigationArea($slideshow) {
  var $navigation_area = $("<ul id='navigation_area'></ul>").insertAfter($slideshow);
  $("<li id='number_images' >number of images </li>").appendTo($navigation_area);
  $("<li id='which_image' > which image?</li>").appendTo($navigation_area);
  $("<ul><li></li></ul>").appendTo($navigation_area.children("li"));
}

function slideshow(i) {
  $slideshow_list_items.eq(i).fadeIn( function () {
    $("#which_image").find("li").text($slideshow_list_items.eq(i).children("img").attr("alt"));
    $(this).delay(2000);
    $(this).fadeOut( function () {
      i = (i == 2) ? 0 : i + 1;
      slideshow(i);
    });
  });
}

$(document).ready(function() {
  //1  Move the #slideshow element to the top of the body.
  var $first_element = $("body").children(":first");
  var $slideshow = $("#slideshow");
  $slideshow.insertBefore($first_element);

  $("#slideshow li").hide(); 
  $slideshow_list_items = $("#slideshow li");
  createNavigationArea($slideshow);

  slideshow(0);//start from first element

  // write the number of items
  $("#number_images").find("li").append($slideshow_list_items.length);
});
