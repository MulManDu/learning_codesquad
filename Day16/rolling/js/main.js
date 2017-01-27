function makeEvt(){
  document.addEventListener("click", getRoll);
}

function getRoll(evt){
  var target = evt.target;
  var targetId = target.id;
  if(target.parentNode.id !== "Btn") return;
  moveContainer(targetId);
  moveNodes(targetId);
}

function moveContainer(targetId){
  var rolling = document.querySelector("#rolling");
  var translate = calMovement(targetId, rolling);
  rolling.style.transform = "translate3d("+ translate +"px, 0px, 0px)";
}

function calMovement(direction, ele){
  var firstContent = ele.querySelector("div:first-child");
  var translate = getTransX(ele);
  var width = getWidth(firstContent);
  if(direction === "left") translate = translate + width;
  else if(direction === "right") translate = translate - width;
  return translate;
}

function moveNodes(direction){
  var rolling = document.querySelector("#rolling");
  var firstContent = rolling.querySelector("div:first-child");
  var lastContent = rolling.querySelector("div:last-child");
  if(direction === "right") moveRight(rolling, firstContent, lastContent);
  else if(direction === "left") moveLeft(rolling, firstContent, lastContent);
}

function moveRight(rolling, firstNode, lastNode){
  var styleX = getTransX(lastNode);
  var width = getWidth(firstNode);
  styleX = styleX + width;
  changeStyleX(firstNode, styleX);
  rolling.appendChild(firstNode);
}

function moveLeft(rolling, firstNode, lastNode){
  var styleX = getTransX(firstNode);
  var width = getWidth(firstNode);
  styleX = styleX - width;
  changeStyleX(lastNode, styleX);
  rolling.insertBefore(lastNode, rolling.childNodes[0]);
}

function changeStyleX(node, styleX){
  node.style.transform = "translate3d("+ styleX +"px, 0px, 0px)";
}

function getTransX(ele){
  var str = ele.style.transform;
  var translate = str.replace(/\w+\((-?\d+)px.+/,"$1");
  var translate = parseInt(translate);
  return translate;
}

function getWidth(ele){
  var str = window.getComputedStyle(ele).getPropertyValue("width");
  var width = str.replace(/(\d+)px/,"$1");
  width = parseInt(width);
  return width;
}

document.addEventListener("DOMContentLoaded", function(){
  makeEvt();
});
