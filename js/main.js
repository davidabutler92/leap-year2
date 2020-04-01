// user interface logic below
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#results").text(result);
  });
});

// business logic below 
var leapYear = function(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
  
}; 