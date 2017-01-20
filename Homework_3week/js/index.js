
var post1_url = "http://jsonplaceholder.typicode.com/posts/1";
var post2_url = "http://jsonplaceholder.typicode.com/posts/2";
var post3_url = "http://jsonplaceholder.typicode.com/posts/3";
var post4_url = "http://jsonplaceholder.typicode.com/posts/4";

var Tabs = document.querySelectorAll("nav > div");
for(var i = 0; i < Tabs.length; i++){
    Tabs[i].addEventListener("click", getEffect);
}
function getEffect(evt){
  var target = evt.target;
  if(target.tagName === "SPAN") target = target.parentNode;
  uncolorTabs(target);
  colorTab(target);
  clearArticle();
  var url = getUrl(target);
  ajaxByUrl(url, reqArticle);
  //writeArticle(title,body);
}

function uncolorTabs(target){
  var parent = target.parentNode;
  var children = parent.querySelectorAll(".tab");
  for(var i = 0; i < children.length; i++){
    children[i].classList.remove("tabclick");
  }
}

function colorTab(target){
  target.classList.add("tabclick");
}

function clearArticle(){
  var titleNode = document.querySelector(".myName");
  var bodyNode = document.querySelector(".myDesc");
  titleNode.innerHTML="";
  bodyNode.innerHTML="";
}

function getUrl(target){
  var url = "";
  var id = target.id;
  switch (id) {
    case "position": url = post1_url
      break;
    case "friend": url = post2_url;
      break;
    case "theme": url = post3_url;
      break;
    case "news": url = post4_url;
      break;
    default: null;
  }
  return url;
}

/* ajax */
function ajaxByUrl(url, fnc){
  var xhrObj = new XMLHttpRequest();
  xhrObj.addEventListener("load", fnc);
  xhrObj.open("GET", url);
  xhrObj.send();
}
/* ajax 콜백함수 */
function reqArticle(evt) {
  var articleObj = {};
  var title = "";
  var body = "";
  var target = evt.target;
  var response = target.response;
  var json = JSON.parse(response);
  articleObj["title"] = json["title"];
  articleObj["body"] = json["body"];
  writeArticle(articleObj)
}
function writeArticle(articleObj){
  var titleNode = document.querySelector(".myName");
  var bodyNode = document.querySelector(".myDesc");
  titleNode.insertAdjacentHTML("beforeend",articleObj["title"]);
  bodyNode.insertAdjacentHTML("beforeend",articleObj["body"]);
}


/*
// nav 대상으로 event Listener 적용.
var nav = document.querySelector("nav");
nav.addEventListener("click",function(evt){
  var target = evt.target;

  if(target.tagName !== "DIV");


  var parent = target.parentNode;
  var children = parent.querySelectorAll(".tab");
  for(var i = 0; i < children.length; i++){
    children[i].classList.remove("tabclick");
  }
  target.classList.add("tabclick");
  event.stopPropagation();
});
*/
