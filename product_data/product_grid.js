var product_array, selected_by_attributes = [];

function countTickedCheckboxes(div_id) {
  var count_ticked_checkboxes = 0;
  $(div_id + " input[type='checkbox']").each( function () {
    if ($(this).attr("checked")) {
      count_ticked_checkboxes += 1;
    }
  });
  return count_ticked_checkboxes;
}

function filterByAttribute(checkbox) {
  var selected_indexes = [];
  if (checkbox.attr("checked")) {
    $(product_array).each( function () {
      if ($(this)[0][checkbox.attr("class")] == checkbox.attr("id")) {
        selected_indexes.push(true);
      } else {
        selected_indexes.push(false);
      }
    });
  }
  return selected_indexes;
}

function updateSelectedImages(selected_indexes, selected_by_attribute) {
  for (var i = 0 ; i < 20; i += 1) {
      selected_by_attribute[i] |= selected_indexes[i];
    }
  return selected_by_attribute;
}

function getImageFromJson(current_product) {
  return $("img[src='images/" + current_product.url + "']");
}

function setDivSelection () {
  var selected_by_attribute = [];
  for (var i = 0 ; i < 20; i += 1) {
    selected_by_attribute[i] = 1;
  }
  return selected_by_attribute;
}

function filterImages() {
  var selected_by_brand = [], selected_by_color = [], i = 0;

  $("#brand input").each( function () {
    selected_indexes = filterByAttribute($(this));
    selected_by_brand = updateSelectedImages(selected_indexes, selected_by_brand);
  });

  if (countTickedCheckboxes("#brand") == 0) {
    selected_by_brand = setDivSelection();
  }

  $("#color input").each( function () {
    selected_indexes = filterByAttribute($(this));
    selected_by_colors = updateSelectedImages(selected_indexes, selected_by_color);
  });

  if (countTickedCheckboxes("#color") == 0) {
    selected_by_color = setDivSelection();
  }

  $(product_array).each( function () {
    image = getImageFromJson($(this)[0]);
    
    if (selected_by_brand[i] && selected_by_color[i]) {
      image.removeClass("hidden");
      selected_by_attributes[i] = true;
    } else {
      selected_by_attributes[i] = false;
    }
    i += 1;
  });
  toggleAvailable();
}

function toggleAvailable() {
  var current_radio_button = $("#toggle input:checked"), i = 0;
  if (current_radio_button.val() == "available") {
    $(product_array).each( function() {
      var image = getImageFromJson($(this)[0]);
      //hide items if sold out
      if ($(this)[0].sold_out == 1) {
        image.addClass("hidden");
      }
    });
  } else {
    $(product_array).each( function() {
      var image = getImageFromJson($(this)[0]);
      //show hidden items filtered by attribute selectors
      if ($(this)[0].sold_out == 1 && selected_by_attributes[i]) {
        image.removeClass("hidden");
      }
      i += 1;
    });
  } 
}

function setSelection() {
  for (var i = 0 ; i < 20; i += 1) {
    selected_by_attributes[i] = true;
  }
}

$(document).ready(function() {
  var product_string;
  var $checkboxes = $("input[type='checkbox']").attr("checked", false);
  // initially all radio button should be checked and all items should show
  $("#all").attr("checked", true);
  setSelection();

  $("#toggle input:radio").bind("click", function () {
    toggleAvailable();
  });

  product_string = $.ajax ( {
    url : "product.json",
    type : "GET",
    async: false,
    dataType : "json",
  });
  product_array= JSON.parse(product_string.responseText);

  $checkboxes.bind("click", function () {
    $("img").addClass("hidden");
    filterImages();
  });
});
