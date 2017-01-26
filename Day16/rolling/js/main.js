var rolling = document.querySelector("#rolling");
var Btn = document.querySelector("#Btn");
var widthStr = window.getComputedStyle(rolling).getPropertyValue("width"); // 200px
var width = widthStr.replace(/(\d+)px/,"$1");
width = parseInt(width);
var divs = rolling.querySelectorAll("div");
var moveMaxCount = divs.length - 1;

Btn.addEventListener("click", getRoll);

function getRoll(evt){
  var targetId = evt.target.id;
  rollBanner(targetId);
}

function rollBanner(targetId){
  var transX = 0;
  var transformStr = rolling.style.transform;
  var valueX = transformStr.replace(/\w+\((-?\d+)px.+/,"$1");
  //"translate3d(0px, 0px, 0px)"
  valueX = parseInt(valueX);
  if(targetId === "leftBtn") transX = valueX + width;
  if(targetId === "rightBtn") transX = valueX - width;
  if(transX <= 0 && transX >= -(width*moveMaxCount)){
    //"translate3d(0px, 0px, 0px)"
    var newtransformStr = transformStr.replace(valueX, transX);
    rolling.style.transform = newtransformStr;
  }
}
