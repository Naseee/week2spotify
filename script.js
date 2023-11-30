 function zoomIn(){
  document.querySelector('#login').style.transform='scale(1.1)'
 }
 function zoomOut(){
  document.querySelector('#login').style.transform='scale(1)'
 }
 document.getElementById("#heading").addEventListener("mouseenter",function(){
  this.style.color='blue';
  })
 $(function(){
  $("#showall").click(function(){
      $("#content").show();
  });
});
$("i").hover(function(){
  $(this).css("color", "white");
  }, function(){
  $(this).css("color", "grey");
});
