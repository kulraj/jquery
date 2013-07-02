$(document).ready(function() {
  //1 append 5 new elements to list
  for (i = 0; i < 5; i += 1) {
    var $new_element = ("<li>new list element " + i + "</li>");
    $("#myList").append($new_element);
  }
  //2 remove odd elements
  // index starts from 0 so the even numbered text is actually the odd elements
  $("#myList li:odd").remove();

  //3 Add another h2 and another paragraph to the last div.module 
  $("div.module:last").append("<h2>this is a new h2</h2><p> this is a new paragraph</p>");

  //4 Add another option to the select element; give the option the value "Wednesday" 
  $("select").append("<option value='wednesday'>wednesday</option>");

  //5 Add a new div.module to the page after the last one;
  $last_div_module = $("div.module:last");
  $("<div class='module'></div>").insertAfter($last_div_module);
  // put a copy of bread inside it.
  $new_last_div_module = $last_div_module.next("div");
  $new_last_div_module.append($("img[alt='bread']").clone());
});
