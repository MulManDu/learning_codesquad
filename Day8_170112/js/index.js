var black_button = document.querySelector("#black_button");

black_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "black";
});

var white_button = document.querySelector("#white_button");

white_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "#e9ebee";
});

var writebox = document.querySelector("#writebox");
writebox.addEventListener("click",function(){
  document.querySelector("#option").style = "display:none";
  document.querySelector("#option2").style = "display:on"
});

var cancel = document.querySelector("#cancel");
cancel.addEventListener("click",function(){
  document.querySelector("#option").style = "display:on";
  document.querySelector("#option2").style = "display:none"
});
