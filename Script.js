// Fowards you to the actual google website on click
$(document).ready(function(){
  $("#search").on("click",function(){
    var search = $("input:text").val().replace(/ /g,"+");
    var link = "https://www.google.com/#q=";
    window.open(link+search);
  });
});
