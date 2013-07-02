$(document).ready(function() {
  var hint_text, search_input, label;

  //1 Set the value of the search input to the text of the label element 
  $search_input = $("input[name='q']");
  $label = $("label[for='q']");
  $search_input.val($label.text());

  //2 Add a class of "hint" to the search input 
  $search_input.addClass("hint");
  console.log("classes of search input after adding hint class: " + $search_input.attr("class"));

  //3 Remove the label element 
  $label.remove();

  //4 Bind a focus event to the search input that removes the hint text and the "hint" class
  $search_input.bind('focus', function() {
    var $this = $(this);
    hint_text = $this.val();
    $this.val("");
    $this.removeClass("hint");
    console.log("classes of search input on focus: " + $this.attr("class"));
  });

  //5 Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
  $search_input.bind('blur', function() {
    var $this = $(this);
    if ($this.val() === "") {
      $this.val(hint_text);
      $this.addClass("hint");
    }
    console.log("classes of search input on blur: " + $this.attr("class"));
  });
});
