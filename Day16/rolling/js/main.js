var Btn = document.querySelector("#Btn");
Btn.addEventListener("click", getRoll);

function getRoll(evt){
  var targetId = evt.target.id;
  Roll(targetId);
  moveNodes(targetId);
}

function Roll(targetId){
  var rolling = document.querySelector("#rolling");
  var firstContent = rolling.querySelector("div:first-child");
  var translate = getTranslateValue(rolling);
  var width = getContentWidth(firstContent);
  translate = calMovement(translate, targetId, width);
  moveAside(translate);
}

function moveNodes(direction){
  var rolling = document.querySelector("#rolling");
  var firstContent = rolling.querySelector("div:first-child");
  var lastContent = rolling.querySelector("div:last-child");
  if(direction === "right") moveRight(rolling, firstContent, lastContent);
  else if(direction === "left") moveLeft(rolling, firstContent, lastContent);
}

function moveRight(rolling, firstNode, lastNode){
  var styleX = getTranslateValue(lastNode);
  var width = getContentWidth(firstNode);
  styleX = styleX + width;
  changeStyleX(firstNode, styleX);
  rolling.appendChild(firstNode);
}

function moveLeft(rolling, firstNode, lastNode){
  var styleX = getTranslateValue(firstNode);
  var width = getContentWidth(firstNode);
  styleX = styleX - width;
  changeStyleX(lastNode, styleX);
  rolling.insertBefore(lastNode, rolling.childNodes[0]);
}

function changeStyleX(node, styleX){
  node.style.transform = "translate3d("+ styleX +"px, 0px, 0px)";
}

function getTranslateValue(ele){
  var str = ele.style.transform;
  var translate = str.replace(/\w+\((-?\d+)px.+/,"$1");
  var translate = parseInt(translate);
  return translate;
}

function getContentWidth(ele){
  var str = window.getComputedStyle(ele).getPropertyValue("width");
  var width = str.replace(/(\d+)px/,"$1");
  width = parseInt(width);
  return width;
}

function calMovement(translate, direction, width){
  if(direction === "left") translate = translate + width;
  else if(direction === "right") translate = translate - width;
  return translate;
}

function moveAside(translate){
  var rolling = document.querySelector("#rolling");
  rolling.style.transform = "translate3d("+ translate +"px, 0px, 0px)";
}
