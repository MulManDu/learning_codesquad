
var Btn = document.querySelector("#Btn");
Btn.addEventListener("click", getRoll);

function getRoll(evt){
  var targetId;
  var rolling;
  var translate = 0;
  var contentWidth = 0;
  var afterTranslate = 0;

  targetId = evt.target.id;
  rolling = document.querySelector("#rolling");
  
  translate = getTranslateValue(rolling);
  contentWidth = getContentWidth(rolling);
  afterTranslate = calMovement(translate, targetId, contentWidth);
  moveAside(afterTranslate, contentWidth);
}

function getTranslateValue(ele){
  var str = ele.style.transform;
  var translate = str.replace(/\w+\((-?\d+)px.+/,"$1");
  var translate = parseInt(translate);
  return translate;
}

function getContentWidth(ele){
  var str = window.getComputedStyle(ele).getPropertyValue("width"); // 200px
  var width = str.replace(/(\d+)px/,"$1");
  width = parseInt(width);
  return width;
}

function calMovement(translate, direction, width){
  if(direction === "left") translate = translate + width;
  else if(direction === "right") translate = translate - width;
  return translate;
}

function moveAside(translate, width){
  var divArray = rolling.querySelectorAll("div");
  var maxMovement = divArray.length - 1;
  var minimum = -(width * maxMovement);
  var max = 0;
  if(minimum <= translate && translate <= max){
    rolling.style.transform = "translate3d("+ translate +"px, 0px, 0px)";
  }
}
