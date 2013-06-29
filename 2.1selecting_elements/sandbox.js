$(document).ready(function() {
    var count_hidden, count_alt;
    $("div.module");

    $("#myListItem").addClass("green");
    $("#myList li:nth-child(3)");
    $("li[id='myListItem']");
    // i think second method is best since we may change the elements or id 
    //but the query will always give the third child.

    $("label[for='q']").addClass("blue");

    count_hidden = $(":hidden").length;
    alert("hidden elements= " + count_hidden);

    count_alt = $("[alt]").length;
    alert("elements with alt= " + count_alt);

    $("tr:odd").addClass("red");
    });
