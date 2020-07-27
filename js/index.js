$(document).ready(function(){
  $(".design").click(function() {
    $("#design, .design").toggle("slow");
  });
  $("#design").click(function() {
    $(".design, #design").toggle("slow");
  });
  $(".development").click(function() {
    $("#development, .development").toggle("slow");
  });
  $("#development").click(function() {
    $(".development, #development").toggle("slow");
  });
  $(".product").click(function() {
    $("#product, .product").toggle("slow");
  });
  $("#product").click(function() {
    $(".product, #product").toggle("slow");
  });
})
$('.img').hover(function(){
  $('.porttext',this).slideToggle('slow');
}, function(){
  $('.porttext',this).slideToggle('slow');
});


$(document).ready(function(){
  $(".section5").submit(function(){
    alert("your request is being worked on");
  });
});
