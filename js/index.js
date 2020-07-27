$(document).ready(function(){
  $(".design").click(function() {
    $("#design, .one").toggle("slow");
  });
  $("#design").click(function() {
    $(".one, #design").toggle("slow");
  });
  $(".development").click(function() {
    $("#development, .three").toggle("slow");
  });
  $("#development").click(function() {
    $(".three, #development").toggle("slow");
  });
  $(".product").click(function() {
    $("#product, .two").toggle("slow");
  });
  $("#product").click(function() {
    $(".two, #product").toggle("slow");
  });
})