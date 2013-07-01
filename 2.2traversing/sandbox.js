$(document).ready(function() {
    var list_current, list_next, list_first, list_siblings;

    $("img").each(function(){
        console.log( "alt attribute of the image element: " + $(this).attr("alt"));
    });

    $("label[for='q']").parent().addClass("blue");

    $list_current = $("#myList li[class^='current']").attr("class","");
    console.log("class of " + $list_current.text() + " after class removal: " + $list_current.attr("class"));
    $list_next = $list_current.next("li").attr("class","current");
    console.log("class added to " + $list_next.text() + ": " + $list_next.attr("class"));

    $("#specials select").parent().next().children([type='submit']).addClass("green");

    $list_first = $("#slideshow").children().eq(0).addClass("current");
    console.log("class of list item 1: " + $list_first.attr("class"));
    $list_siblings = $list_first.siblings();
    $list_siblings.addClass("disabled");
    console.log("class of sibling 1: " + $list_first.next("li").attr("class"));
    console.log("class of sibling 2: " + $list_siblings.eq(1).attr("class"));
    });
