$(document).ready(function() {
$("#index").show();
$("#educational,#interest,#personal,#skills,#workexperience").hide();
$("nav li:nth-child(1)").click(function(e) {
e.preventDefault(); // untuk mencegah aksi default elemen
console.log("HOME BRO");
$("article").fadeOut('slow',function(){
$(this).css('backgroundcolor','#E0BA9B').fadeIn('slow');
$("#index").show();
$("#educational,#interest,#personal,#skills,#workexperience").hide();
})
});
$("nav li:nth-child(2)").click(function(e) {
e.preventDefault();
$("article").fadeOut('slow',function(){
$(this).css('background-color','#E0BA9B').fadeIn('slow');
$("#personal").show();
$("#educational,#interest,#index,#skills,#workexperience").hide();
})
});
$("nav li:nth-child(3)").click(function(e) {
e.preventDefault();
$("article").slideUp(200,function(){
$(this).css('background-color','#D28574').slideDown(200);
$("#educational").show();
$("#index,#interest,#personal,#skills,#workexperience").hide();
})
});
$("nav li:nth-child(4)").click(function(e) {
e.preventDefault();
$("article").slideUp(200,function(){
$(this).css('background-color','#F9CDAD').slideDown(200);
$("#workexperience").show();
$("#index,#interest,#personal,#skills,#educational").hide();
})
});
$("nav li:nth-child(5)").click(function(e) {
e.preventDefault();
$("article").slideUp(200,function(){
$(this).css('background-color','#FC9D9A').slideDown(200);
$("#skills").show();
$("#index,#interest,#personal,#educational,#workexperience").hide();
})
});
$("nav li:nth-child(6)").click(function(e) {
e.preventDefault();
$("article").slideUp(200,function(){
$(this).css('background-color','#F7E4C6').fadeIn(500);
$("#interest").show();
$("#index,#educational,#personal,#skills,#workexperience").hide();
})
});
});