$(document).ready(function() {
  $("button").on('click', function() {
    $("#watermelon").animate({left: "+=500"}, 2000);
    $("#watermelon").animate({left: "-=300"}, 1000);
  })
});
