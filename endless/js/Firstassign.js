
// document.getElementById('bars').addEventListener('click',function (){
//       let toggle = document.getElementById('center').style.display;
//       if (toggle=='none') {
//         document.getElementById('center').style.display="block";
//       }else{
//         document.getElementById('center').style.display="none";
//       }
  
// });
    //The same like abov
$(document).ready(function(){
  $("#bars").click(function(){
      $("#center").toggle(500);
  });
});