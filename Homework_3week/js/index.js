function makeEvtForTabs(){
  document.addEventListener("click", switchTab);
}
function switchTab(evt){
  var target = evt.target;
  if(target.tagName === "SPAN") target = target.parentNode;
  if(target.className !== "tab") return;
  getEffect(target);
}

function getEffect(target){
  var postUrls = {
    "position" : "http://jsonplaceholder.typicode.com/posts/1",
    "friend" : "http://jsonplaceholder.typicode.com/posts/2",
    "theme" : "http://jsonplaceholder.typicode.com/posts/3",
    "news" : "http://jsonplaceholder.typicode.com/posts/4"
  }
  var targetUrl = "";
  var Tabs = document.querySelectorAll("nav > .tab");
  uncolorTabs(Tabs);
  colorTab(target.classList);
  removePost();
  targetUrl = postUrls[target.id];
  ajaxByUrl(targetUrl, reqPost);
}

function uncolorTabs(Tabs){
  for(var i = 0; i < Tabs.length; i++){
    Tabs[i].classList.remove("selectedTab");
  }
}

function colorTab(classList){
  classList.add("selectedTab");
}

function removePost(){
  var titleNode = document.querySelector(".myName");
  var bodyNode = document.querySelector(".myDesc");
  titleNode.innerHTML="";
  bodyNode.innerHTML="";
}

/* ajax */
function ajaxByUrl(url, fnc){
  var xhrObj = new XMLHttpRequest();
  xhrObj.addEventListener("load", fnc);
  xhrObj.open("GET", url);
  xhrObj.send();
}

/* ajax 콜백함수 */
function reqPost(evt) {
  var PostObj = {};
  var target = evt.target;
  var response = target.response;
  var json = JSON.parse(response);
  PostObj["title"] = json["title"];
  PostObj["body"] = json["body"];
  writePost(PostObj);
}

function writePost(PostObj){
  var postNode = document.querySelectorAll(".eleDisplayShow > ul > li > div");
  postNode[0].innerHTML = PostObj["title"];
  postNode[1].innerHTML = PostObj["body"];
}

document.addEventListener("DOMContentLoaded", function(){
  makeEvtForTabs();
});
