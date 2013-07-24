var id = 1, max_age = 0;

function clearColors() {
  $("tr").removeClass("red");
  $("tr").removeClass("green");
  $("tr").removeClass("yellow");
}

function resetFilters() {
  $("input[name='gender_selector']").attr("checked", false);
  $("#age_selector").val("value");
  clearColors();
}

function addRow() {
  var cell = [], $table = $("#table");
  var name = $("#name").val(), age = $("#age").val(), gender = $("input[name='gender']:checked").attr("value");
  var $row = $("<tr class='data'></tr>").appendTo($table);
  for (i =0; i < 4; i += 1) {
    cell[i] = $("<td></td>").appendTo($row);
  }
  cell[0].text(id);
  cell[1].text(name);
  cell[2].text(gender);
  cell[2].addClass("gender");
  cell[2].attr("name", gender);
  cell[3].text(age);
  cell[3].addClass("age");
  cell[3].attr("data-age", age);

  max_age = max_age > parseInt($("#age").val()) ? max_age : $("#age").val();

  id += 1;
}

function generateDropdownOptions() {
  $("#age_selector").empty();
  $("<option value='select'>select</option>").appendTo($("#age_selector"));
  for (var age_limit = 1; age_limit < max_age; age_limit += 10) {
    var upper_age = age_limit + 9;
    $("<option data-lower-age='" + age_limit + "' data-upper-age='" + upper_age + "'>" + age_limit + " to " + upper_age + "</option>").appendTo($("#age_selector"));
  }
}

function validate(form) {
  if ($("#name").val().trim().length == 0 || $("#age").val().trim().length == 0 || !($("#male").attr("checked") || $("#female").attr("checked")) ) {
    alert("please enter your details");
    return false;
  }

  addRow();
  generateDropdownOptions();
  return false;
}

$(function(){
  $("input[type='radio']").attr("checked", false);

  $("#selection_form input[name='gender_selector'], #age_selector").bind("click", function() {
  selected_gender = $("input[name='gender_selector']:checked");
  clearColors();
  selected_option = $("#age_selector option:selected");
  lower_age = parseInt(selected_option.attr("data-lower-age")), upper_age = parseInt(selected_option.attr("data-upper-age"));
  
  //highlight the rows as per selection
  $("tr.data").each( function () {
    var age = parseInt($(this).children("td.age").attr("data-age"));
    if ($(this).children("td.gender").attr("name") == selected_gender.attr("value")) {
      $(this).addClass("green");
      if (age >= lower_age && age <= upper_age) {
        $(this).addClass("yellow");
      }
    } else {
      if (age >= lower_age && age <= upper_age) {
        $(this).addClass("red");
      }
    }
   });
  });
});
