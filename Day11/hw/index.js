
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");

first.addEventListener("click",function(evt){
  var target = evt.target;
  console.log("first: ",target);
});
second.addEventListener("click",function(evt){
  var target = evt.target;
  console.log("second: ",target);
});
third.addEventListener("click",function(evt){
  var target = evt.target;
  //evt.stopPropagation();
  console.log("third: ",target);
});
/*
document.addEventListener("click",function(evt){
  var target = evt.target;
  //evt.stopPropagation();
  console.log("target: ", target);
});
*/
