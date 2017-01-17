var errorMSG = "글자수가 초과되었습니다!";

var black_button = document.querySelector("#black_button");
var white_button = document.querySelector("#white_button");

black_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "black";
});
white_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "#e9ebee";
});

var writebox = document.querySelector("#writebox");
var cancel = document.querySelector("#cancel");

writebox.addEventListener("click",function(){
  document.querySelector("#option").style = "display:none";
  document.querySelector("#option2").style = "display:on"
});
cancel.addEventListener("click",function(){
  document.querySelector("#option").style = "display:on";
  document.querySelector("#option2").style = "display:none"
});

var errorMSG = "글자수(20)를 초과했습니다!";
var max = 20;
function checkStringMax(string){
    max = 20;
    if(string.length >= max) return true;
    return false;
}
writebox.addEventListener("keydown",function(){
  if(checkStringMax(writebox.value)){
    alert(errorMSG);
  }
});
