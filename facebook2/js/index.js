var errorMSG = "글자수(20)를 초과했습니다!";
var max = 20;
var black_button = document.querySelector("#black_button");
var white_button = document.querySelector("#white_button");
var writebox = document.querySelector("#writebox");
var cancel = document.querySelector("#cancel");

black_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "black";
});
white_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "#e9ebee";
});

writebox.addEventListener("click",function(){
  document.querySelector("#toolsOption").style = "display:none";
  document.querySelector("#cancelOption").style = "display:on"
});
cancel.addEventListener("click",function(){
  document.querySelector("#toolsOption").style = "display:on";
  document.querySelector("#cancelOption").style = "display:none"
  writebox.value = null;
});

function checkStringMax(string){
    if(string.length >= max) return true;
    return false;
}

writebox.addEventListener("keydown",function(){
  if(checkStringMax(writebox.value)){
    alert(errorMSG);
  }
});
